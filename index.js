var WebSocketServer = require('ws').Server;
var ws = new WebSocketServer({port: 7000});


ws.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
        console.info('received: %s', message);
    });

    var i = 1;

    setInterval(()=> {
        // if (!ws) { break; }
        ws.send('Here is an update' + i);
        i++;
    }, 3000);
});
