'use strict';

function squareTheNum(req, res, next) {


    const {num} = req.query ;
    const rgx = /\b[0-9][0-9]*\b/g;
    const strNum = num.match(rgx);

    if(strNum) {
        let number = parseInt(strNum[0]);
        req.squared = number*number;
        
        next();
    } else {
        res.send(`from strnum`);
        next(`enter number inside num`);
    }
  
}


module.exports = { squareTheNum };