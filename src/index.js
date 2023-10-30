const Fastify = require("fastify");
const routes = require("./routes");

const fastify = Fastify({
  logger: false,
});
require("dotenv").config();

fastify.listen({ port: 3000 }, function (error, address) {
  if (error) {
    console.log(error);
    process.exit(1);
  }
  console.log(`server listening on ${address}`);
});

fastify.register(require("@fastify/swagger"), {});
fastify.register(require("@fastify/swagger-ui"), {
  routePrefix: "/docs",
  swagger: {
    info: {
      title: "Encriptador",
      description: "API para encriptar e desencriptar mensagens",
      version: "1.0.0",
    },
    host: "127.0.0.1:3000",
    basePath: "",
    schemes: ["http", "https"],
    consumes: ["application/json"],
    produces: ["application/json"],
    default: false,
  },
});

fastify.register(async (fastify) => {
  routes(fastify);
});

fastify.ready((err) => {
  if (err) throw err;
  fastify.swagger();
});
