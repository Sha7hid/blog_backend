const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');


const app = express();
app.use(bodyParser.json());

const connectDB = require('./config/db');

// Load Config
dotenv.config({path: './config/config.env'});

connectDB();
const port = 3000;
// Routes
app.use('/', require('./routes/index'));
app.listen(port);