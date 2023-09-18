const { findIndex } = require("./findIndex");
const { findCaracter } = require("./findCaracter");
const cipherCaracters = process.env.CIPHER_CARACTERS;

exports.Encrypt = (message, password) => {
  let indiceAtual = 0;
  let initialString = "";

  function obterProximoValorCircular() {
    const valorAtual = password[indiceAtual];
    indiceAtual = (indiceAtual + 1) % password.length;
    return valorAtual;
  }

  for (let index = 0; index < message.length; index++) {
    let caracterMessage = message[index];
    caracterIndex = findIndex(caracterMessage);
    if (caracterIndex === -1) {
      throw new Error(
        "Sua mensagem não está dentro dos parâmetros aceitos e por isso não pode ser encriptada"
      );
    } else {
      initialString += findCaracter((caracterIndex + obterProximoValorCircular()) % cipherCaracters.length);
    }
  }

  return initialString;
};
