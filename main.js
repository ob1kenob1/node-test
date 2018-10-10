const http = require('http');

const info = require('./info.json');

const pug = require('pug');

const templateRenderer = pug.compileFile('index.pug');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
    const renderedHtml = templateRenderer(info);
    res.write(renderedHtml);
    return res.end();
}).listen(3000);

