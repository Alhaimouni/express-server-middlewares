'use strict';

const express = require('express');
const cors = require('cors');
const {handleMain, handleSquare} = require('./Handlers');
const {squareTheNum} = require('./middlewares/validate-number');
const {errHandler} = require('./error-handlers/500');
const app = express();

//======================================================= (App Level Middlewares) =======================================================//

app.use(cors());
app.use(express.json());

//============================================================= (EndPoints) =============================================================//

app.get('/',handleMain);
app.get('/square',squareTheNum,handleSquare);

//=========================================================== (Error Handler) ===========================================================//

app.use(errHandler);

//========================================================= (Starting Function) =========================================================//

function start(port) {
    app.listen(port,()=> console.log(`Server is live @ ${port}`));
}

//=========================================================== (Module Export) ===========================================================//

module.exports = {app, start};