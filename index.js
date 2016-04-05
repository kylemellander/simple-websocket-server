var WebSocketServer = require('ws').Server;
var ws = new WebSocketServer({port: 7000});


ws.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
        console.info('received: %s', message);
    });

    var i = 1;

    var notify = setInterval(()=> {
        ws.send('Here is an update ' + i);
        i++;
    }, 10000);

    ws.on('closedconnection', function() {
        clearInterval(notify);
    });
});
