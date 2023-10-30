const cipherCaracters = require("../utils/rules");

exports.findIndex = (caracter) => {
  return cipherCaracters.indexOf(caracter);
};
