const cipherCaracters = require("../utils/rules");

exports.findCaracter = (index) => {
  return cipherCaracters[index];
};
