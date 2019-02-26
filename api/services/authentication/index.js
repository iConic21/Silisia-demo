const core = require('./../../core');
const tokenService = require('./token');

const register = async (req, res) => {

    if (!req.validate(req.body, ['display_name', 'email', 'password'])) {
        return res.error(null, 400);
    }

    const currentUser = await core.services.users.findUserByEmail(req.body.email);
    if (currentUser) {
        return res.error('email already registered', 400);
    }

    const LastUserWithName = await core.schema.users.findOne().where({
        display_name: req.body.display_name
    }).sort('-userIndex');

    const { salt, hash } = core.services.common.saltHashPassword(req.body.password);
    const user = {
        display_name: req.body.display_name,
        email: req.body.email,
        userIndex: LastUserWithName ? LastUserWithName.userIndex + 1 : 1,
        password_hash: hash,
        password_salt: salt,
        status: 0
    }

    const savedUser = await new core.schema.users(user).save();
    return res.ok(core.services.users.getUserPublic(savedUser), 201);
}

const login = async (req, res) => {

    if (!req.validate(req.body, ['email', 'password'])) {
        return res.error(null, 400);
    }

    const currentUser = await core.services.users.findUserByEmail(req.body.email);
    if (!currentUser) {
        return res.error('failed to login', 400);
    }

    tokenService.resetToken(req, res);

    const { hash } = core.services.common.saltHashPassword(req.body.password, currentUser.password_salt);

    if (currentUser.password_hash !== hash) {
        return res.error('failed to login', 400);
    }

    if (currentUser.status === 2) {
        return res.error('account is blocked', 400);
    }

    if (currentUser.status === 3) {
        return res.error('account is deactivated', 400);
    }

    const user = core.services.users.getUserPublic(currentUser);
    const tokens = await tokenService.getToken(user);

    if (!tokens.accessToken || !tokens.refreshToken) {
        return res.error(null, 500);
    }

    res.cookie('access-token', tokens.accessToken, { maxAge: 86400000, httpOnly: true });
    res.cookie('refresh-token', tokens.refreshToken, { maxAge: 315423072000, httpOnly: true });

    if (req.session) {
        req.session = {
            ...req.session,
            user
        };
    } else {
        req.session = {
            user
        };
    }

    return res.ok(user, 200);
}

const auth = async (req, res, next) => {
    
    if (req.session && req.session.user) {
        const user = await core.services.users.findUserById(req.session.user.id);

        if (!user) {
            return res.error(null, 401);
        }

        req.session = {
            ...req.session,
            user: core.services.users.getUserPublic(user)
        };
        return next();
    } else if (req.cookies['access-token'] || req.cookies['refresh-token']) {
        const tokens = await tokenService.validateToken(req.cookies['access-token'], req.cookies['refresh-token']);

        if (tokens['accessToken'] && tokens['refreshToken']) {
            res.cookie('access-token', tokens['accessToken'], { maxAge: 86400000, httpOnly: true });
            res.cookie('refresh-token', tokens['refreshToken'], { maxAge: 315423072000, httpOnly: true });
        }

        if (!tokens || !tokens['decoded']) {
            return res.error(null, 500); 
        }

        const user = await core.services.users.findUserById(tokens['decoded'].id);

        if (!user) {
            return res.error(null, 401);
        }

        if (req.session) {
            req.session = {
                ...req.session,
                user: core.services.users.getUserPublic(user)
            };
        } else {
            req.session = {
                user: core.services.users.getUserPublic(user)
            };
        }
        
        return next();
    } else {
        return res.error(null, 401);
    }
}

module.exports = {
    register,
    login,
    auth
};