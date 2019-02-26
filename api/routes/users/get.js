const core = require('./../../core');

module.exports = (apiRoutes) => {
    apiRoutes.get('/me', core.services.authentication.auth, core.services.users.me);
    apiRoutes.get('/user/validate', core.services.authentication.auth, (req, res) => {
        return res.ok(true, 200);
    });
    return apiRoutes;
}