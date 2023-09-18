const { findIndex } = require("./findIndex");
const { findCaracter } = require("./findCaracter");

exports.Decrypt = (message, password) => {
  let indiceAtual = 0;

  function obterProximoValorCircular() {
    const valorAtual = password[indiceAtual];
    indiceAtual = (indiceAtual + 1) % password.length;
    return valorAtual;
  }

  let initialString = "";

  for (let index = 0; index < message.length; index++) {
    let caracterMessage = message[index];
    caracterIndex = findIndex(caracterMessage);
    if (caracterIndex === -1) {
      throw new Error(
        "Sua mensagem não está dentro dos parâmetros aceitos e por isso não pode ser decriptada"
      );
    } else {
      initialString += findCaracter(
        caracterIndex - obterProximoValorCircular()
      );
    }
  }

  return initialString;
};
