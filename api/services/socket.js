const core = require('./../core');

core.io.on('connection', (socket) => {
    console.log('connected');
    socket.on('disconnect', function () {
        console.log('disconnect');
    });
});