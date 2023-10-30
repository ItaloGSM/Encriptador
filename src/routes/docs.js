const docs = {
  encrypt: {
    schema: {
      tags: ["ENCRIPTADOR"],
      summary: "Encripte uma mensagem",
      body: {
        type: "object",
        properties: {
          message: { type: "string" },
          password: {
            type: "array",
            items: {
              type: "integer",
            },
            minItems: 3,
            maxItems: 3,
          },
        },
      },
      response: {
        200: {
          description: "Resposta de sucesso",
          type: "object",
          properties: {
            messageEncrypted: { type: "string" },
          },
        },
        400: {
          description: "Resposta de erro",
          type: "object",
          properties: {
            error: { type: "string" },
            message: { type: "string" },
          },
        },
      },
    },
  },
  decrypt: {
    schema: {
      tags: ["DECRIPTADOR"],
      summary: "Decripte uma mensagem",
      body: {
        type: "object",
        properties: {
          message: { type: "string" },
          password: {
            type: "array",
            items: {
              type: "integer",
            },
            minItems: 3,
            maxItems: 3,
          },
        },
      },
      response: {
        200: {
          description: "Resposta de sucesso",
          type: "object",
          properties: {
            messageDecrypted: { type: "string" },
          },
        },
        400: {
          description: "Resposta de erro",
          type: "object",
          properties: {
            error: { type: "string" },
            message: { type: "string" },
          },
        },
      },
    },
  },
};

module.exports = docs;
