const { decodeQR } = require("./qr");

decodeQR("test.jpg")
  .then(data => console.log(data))
  .catch(err => console.error(err.message));