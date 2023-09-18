const Fastify = require("fastify");

const fastify = Fastify({
  logger: false,
});

require("dotenv").config();
require("./routes")(fastify);

fastify.listen({ port: 3000 }, function (error, address) {
  if (error) {
    console.log(error);
    process.exit(1);
  }
  console.log(`server listening on ${address}`);
});
