const core = require('./core');

core.app.use(core.express.static(__dirname + '/public'));

const server = core.http.listen(3001, function () {
    const host = server.address().address
    const port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
});

core.io = require('socket.io').listen(server);
require('./services/socket');