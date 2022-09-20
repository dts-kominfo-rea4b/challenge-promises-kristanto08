const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme

const promiseOutput = async (stat) => {
    var x =0;
    await promiseTheaterIXX().then((value) => 
    {
        value.forEach(el => {
            if (el.hasil==stat)
            {
                x+=1;
            }
        });
    });
    await promiseTheaterVGC().then((value) => 
    {
        value.forEach(el => {
            if (el.hasil==stat)
            {
                x+=1;
            }
        });
    });
    return x;
};


//promiseOutput();
module.exports = {
  promiseOutput,
};

