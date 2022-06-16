const http = require('http');
const wol = require('wake_on_lan');

const target = '2c:f0:5d:71:08:4d';

const requestListener = function (_, res) {
  wol.wake(target, function (error) {
    if (error) {
      res.writeHead(500);
      res.end(error);
    } else {
      res.writeHead(200);
      res.end('OK');
    }
  });


}

const server = http.createServer(requestListener);
server.listen(8079);
