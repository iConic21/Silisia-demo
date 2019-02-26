const core = require('./../../core');
const pathName = '/users';

var apiRoutes = core.express.Router();
apiRoutes = require('./get')(apiRoutes);
core.app.use(pathName, apiRoutes);