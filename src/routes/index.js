const { cipherRoutes } = require("./cipher");

module.exports = (fastify) => {
  cipherRoutes(fastify);
};
