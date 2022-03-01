require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const { urlencoded } = require('express');
const app = express();
const PORT = process.env.PORT;


app.use(logger('dev'));
app.use(urlencoded({extended:false}));
app.use(cors());

const vinylController = require('./controllers/vinylController.js');
app.use('/vinyls', vinylController);

app.listen(PORT, ()=>{
    console.log(`Listening on port: ${PORT}`);
})