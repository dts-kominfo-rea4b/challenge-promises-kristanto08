const { promiseTheaterIXX, promiseTheaterVGC } = require('./external.js');

let filmMarah = 0;
let filmTidakMarah = 0;
const promiseOutput = (emosi) => {
  if (emosi === 'marah') {
    return promiseTheaterIXX().then((value) => {
      value.forEach((array) => {
        if (hasil === 'marah') {
          filmMarah++;
        } else if (array.hasil === 'tidak marah') {
          filmTidakMarah++;
        } else {
          ('error');
        }
      });
      //console.log(`hasil console: ${filmMarah}`);
      return filmMarah;
    });
  }
};

module.exports = {
  promiseOutput,
};

