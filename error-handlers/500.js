'use strict'; 


function errHandler(err,req,res,next) {

    res.send({
        code : 500,
        Message : `internal server error as ${err}`
    })
}



module.exports = {errHandler};