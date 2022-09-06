'use strict';


//========================================================= (Handler Functions) =========================================================//

function handleMain(req,res) {
    res.send(`inside the main page`);
}

function handleSquare(req,res) {
    res.send(`${req.squared}`);
}

//=========================================================== (Module Export) ===========================================================//

module.exports ={handleMain,handleSquare}