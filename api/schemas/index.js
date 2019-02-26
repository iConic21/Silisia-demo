const core = require('../core');
const userSchema = require('./users');

module.exports.users = core.mongoose.model('users', userSchema);