const server = require("./api/server.js");

const PORT = process.env.PORT || 1234;

server.listen(PORT, () => {
  console.log(`\n\n${PORT}\n\n`);
});
