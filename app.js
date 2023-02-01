const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');


const app = express();
app.use(bodyParser.json());

const connectDB = require('./config/db');

// Load Config
dotenv.config({path: './config/config.env'});

connectDB();

// Routes
app.use('/', require('./routes/index'));
app.listen(process.env.PORT);