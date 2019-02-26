const core = require('./../../core');

module.exports = (apiRoutes) => {
    apiRoutes.post('/', core.services.authentication.login);
    apiRoutes.post('/register', core.services.authentication.register);

    return apiRoutes;
}
