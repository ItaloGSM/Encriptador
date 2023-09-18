const cipherCaracters = process.env.CIPHER_CARACTERS;

exports.findIndex = (caracter) => {
  return cipherCaracters.indexOf(caracter);
};
