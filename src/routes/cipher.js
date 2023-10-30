const { Decrypt } = require("../logic/decrypt");
const { Encrypt } = require("../logic/encrypt");
const docs = require("./docs");

const cipherRoutes = (fastify) => {
  fastify.register(async (fastify) => {
    fastify.post("/encrypt", docs.encrypt, (request, reply) => {
      if (request.body.message && request.body.password) {
        try {
          const result = Encrypt(request.body.message, request.body.password);

          reply.send({ messageEncrypted: `${result}` });
        } catch (error) {
          reply.code(400).send({
            error: "Bad Request",
            message: error.message,
          });
        }
      } else {
        reply.code(400).send({
          error: "Bad Request",
          message: "message e password são obrigatórios",
        });
      }
    });

    fastify.post("/decrypt", docs.decrypt, function (request, reply) {
      if (request.body.message && request.body.password) {
        try {
          const result = Decrypt(request.body.message, request.body.password);
          reply.send({ messageDecrypted: `${result}` });
        } catch (error) {
          reply.code(400).send({
            error: "Bad Request",
            message: error.message,
          });
        }
      } else {
        reply.code(400).send({
          error: "Bad Request",
          message: "message e password são obrigatórios",
        });
      }
    });
  });
};

module.exports = cipherRoutes;
