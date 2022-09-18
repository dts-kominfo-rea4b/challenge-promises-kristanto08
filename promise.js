const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme

const promiseOutput = null;

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const simplePromise = new Promise((resolve, reject) => {
  // jika kondisi promiseOutput null maka
  if (promiseOutput) {
    const successMassage = 'berhasil';
    resolve(successMassage);
  } else {
    const failMassage = 'gagal';
    reject(failMassage);
  }
});

simplePromise
  .then((massage) => console.log(massage))
  .catch((error) => console.log(error));


module.exports = {
promiseOutput,
};

