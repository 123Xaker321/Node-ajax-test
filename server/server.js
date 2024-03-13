const Objects = require('../models/objects')
const express = require('express');
const app = express();
const morgan = require('morgan');
const chalk = require('chalk');
const errorMsg = chalk.bgKeyword('white').red;
const successMsg = chalk.bgKeyword('white').green;
const createPath = require('../helpers/create-path');
require('dotenv').config()
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo'); 
app.set('view engine', 'ejs');
console.log(process.env.MONGO_URL)
mongoose
  .connect(process.env.MONGO_URL)
  .then((res) => console.log(successMsg('Connected to DB')))
  .catch((error) => console.log(errorMsg(error)));
app.listen(process.env.PORT, (error) => {
    error ? console.log(errorMsg(error)) : console.log(successMsg(`listening port ${process.env.PORT}`));
});
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.get('/', (req, res) => {
    res.render(createPath('index'));
});