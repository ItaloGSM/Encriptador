const cipherRoutes = require("./cipher");

const routes = (fastify) => {
  cipherRoutes(fastify);
};

module.exports = routes;
