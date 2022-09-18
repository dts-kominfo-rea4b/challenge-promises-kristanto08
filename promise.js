const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme

const emosi = null;

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = new Promise((resolve, reject) => {
  // jika kondisi promiseOutput null maka
  if (emosi) {
    const successMassage = 'berhasil';
    resolve(successMassage);
  } else {
    const failMassage = 'gagal';
    reject(failMassage);
  }
});

promiseOutput
  .then((massage) => console.log(massage))
  .catch((error) => console.log(error));


module.exports = {
promiseOutput,
};
