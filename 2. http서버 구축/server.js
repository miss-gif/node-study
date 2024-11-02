import { createServer } from "http";

const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("Hello World!");
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
