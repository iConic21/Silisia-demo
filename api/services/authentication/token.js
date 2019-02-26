const core = require('./../../core');
const jwt = require('jsonwebtoken');

const getToken = user => {
    return new core.promise(function (resolve, reject) {
        var accessToken = jwt.sign(user, core.config.jwt.secret, { expiresIn: core.config.jwt.duration });
        var refreshToken = jwt.sign(user.id, core.config.jwt.refreshSecret, {});
        resolve({
            accessToken,
            refreshToken
        });
    });
}

const validateToken = (req, res, token, refreshToken) => {
    return new core.promise(function (resolve, reject) {
        try {
            var decoded = jwt.verify(token, core.config.jwt.secret);
            delete decoded.exp;
            delete decoded.iat;
            resolve({
                decoded: decoded
            });
        } catch (err) {
            try {
                var decoded = jwt.verify(refreshToken, core.config.jwt.refreshSecret);
                delete decoded.exp;
                delete decoded.iat;

                core.store.users.valid(decoded).then((user) => {
                    getToken(user).then((tokens) => {
                        resolve({
                            decoded: user,
                            accessToken: tokens.accessToken,
                            refreshToken: tokens.refreshToken
                        });
                    });
                }, () => {
                    reject('Failed to authenticate token.');
                })
            } catch (err) {
                reject('Failed to authenticate token.');
            }
        }
    });
}

const decodeToken = token => {
    return new core.promise(function (resolve, reject) {
        try {
            var decoded = jwt.verify(token, core.config.jwt.secret);
            delete decoded.exp;
            delete decoded.iat;
            resolve(decoded);
        } catch (err) {
            reject('Failed to authenticate token.');
        }
    });
}

const resetToken = (req, res) => {
    const cookie = req.cookies;
    for (var prop in cookie) {
        if (!cookie.hasOwnProperty(prop)) {
            continue;
        }
        res.cookie(prop, '', { expires: new Date(0) });
    }

    req.session.user = null;
}

module.exports = {
    getToken,
    validateToken,
    decodeToken,
    resetToken
}