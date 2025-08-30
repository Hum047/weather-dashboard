import http from 'http';

const server = http.createServer((req, res) => {
  res.end('Hello from Node!');
});

server.listen(5173, '127.0.0.1', () => {
  console.log('Server running on http://127.0.0.1:5173');
});
