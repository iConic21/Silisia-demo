const core = require('./../../core');

const randomString = () => {
    return core.crypto.randomBytes(4).toString('hex');
}

const saltHashPassword = (password, salt = randomString()) => {
    const hash = core.crypto.createHmac('sha512', salt).update(password);
    return { salt, hash: hash.digest('hex') }
}

const response = (data = {}, success = true, error = {}) => {
    return {
        success: success,
        data: data,
        error: error,
        serverTime: new Date().toJSON()
    }
}

const responseOk = (payload, res) => {
    return res.status(200).json(response(payload));
}

const reponseError = (payload, status = 500, res) => {
    return res.status(status).json(response(null, false, payload));
}

const getOTT = (tokenType, expire_on) => {
    const token = core.crypto.randomBytes(64).toString('hex');
    return {
        token,
        tokenType,
        expire_on
    }
}

core.app.use(function (req, res, next) {
    res.ok = (payload) => {
        return responseOk(payload, res);
    }
    res.error = (payload, status) => {
        return reponseError(payload, status, res);
    }
    req.validate = (source, params) => {
        var valid = true;
        params.forEach(e => {
            if (source[e] == null || source[e] == "") {
                valid = false;
                return false;
            }
        });
        return valid;
    }
    return next();
});

module.exports = {
    getOTT,
    saltHashPassword,
    randomString
}