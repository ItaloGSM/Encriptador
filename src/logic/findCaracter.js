const cipherCaracters = process.env.CIPHER_CARACTERS;

exports.findCaracter = (index) => {
  return cipherCaracters[index];
};
