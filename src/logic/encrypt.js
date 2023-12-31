const { findIndex } = require("./findIndex");
const { findCaracter } = require("./findCaracter");
const cipherCaracters = require("../utils/rules");

exports.Encrypt = (message, password) => {
  let indiceAtual = 0;
  let initialString = "";

  function passwordNextValue() {
    const valorAtual = password[indiceAtual];
    if (valorAtual < 0 || isNaN(valorAtual)) {
      throw new Error(
        "Sua senha não está dentro dos parâmetros aceitos e por isso não pode ser encriptada",
      );
    } else {
      indiceAtual = (indiceAtual + 1) % password.length;
      return valorAtual;
    }
  }

  for (let index = 0; index < message.length; index++) {
    let caracterMessage = message[index];
    caracterIndex = findIndex(caracterMessage);
    if (caracterIndex === -1) {
      throw new Error(
        "Sua mensagem não está dentro dos parâmetros aceitos e por isso não pode ser encriptada",
      );
    } else {
      initialString += findCaracter(
        (caracterIndex + passwordNextValue()) % cipherCaracters.length,
      );
    }
  }

  return initialString;
};
