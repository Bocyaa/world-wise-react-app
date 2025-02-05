const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router('data/cities.json'); // Adjust path if needed
const middlewares = jsonServer.defaults();

// Add a delay middleware (500ms delay)
server.use(middlewares);
server.use((req, res, next) => {
  setTimeout(next, 500); // 500ms delay
});

server.use(router);

const PORT = 8000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT} with a 500ms delay 🚀`);
});
