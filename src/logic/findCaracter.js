const cipherCaracters = process.env.CIPHER_CARACTERS;

console.log(cipherCaracters);

exports.findCaracter = (index) => {
  return cipherCaracters[index];
};
