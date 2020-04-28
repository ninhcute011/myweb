// 1760142 - Nguyễn Nhật Ninh
const http = require('http')
const port = process.env.PORT || 3000;

const requestHandler = (request, response) => {
  const url = new URL(request.url, `http://${request.headers.host}`);
  const name = url.searchParams.get('name') || 'Word';
  response.end(`Hello ${name} Node.js Server!`);
}

const server = http.createServer(requestHandler);

server.on('error', function (err) {
  console.log('Some thing bad happened', err);
});

server.listen(port, function () {
  console.log(`Server is listening on ${port}`);
});