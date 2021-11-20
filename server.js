const http = require('http');

const server = http.createServer((req, res) => {
  // eslint-disable-next-line no-console
  console.log(req.method);
  res.write('hello world');
  res.end();
});

// eslint-disable-next-line no-console
server.listen(3000, () => console.log('app is running'));
