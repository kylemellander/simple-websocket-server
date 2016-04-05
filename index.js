var io = require('socket.io').listen(7000);

io.sockets.on('connection', function (socket) {
    socket.on('message', function incoming(message) {
        console.info('received: %s', message);
    });

    var i = 1;

    var notify = setInterval(()=> {
        socket.emit('notification', 'Here is an update ' + i);
        i++;
    }, 10000);

    socket.on('closedconnection', function() {
        clearInterval(notify);
    });
});
