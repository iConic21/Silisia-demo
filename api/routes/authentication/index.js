const core = require('./../../core');
const pathName = '/auth';

var apiRoutes = core.express.Router();
apiRoutes = require('./post')(apiRoutes);
apiRoutes = require('./patch')(apiRoutes);
core.app.use(pathName, apiRoutes);