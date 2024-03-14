const Object = require('../models/object');
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
mongoose
  .connect(process.env.MONGO_URL)
  .then((res) => console.log(successMsg('Connected to DB')))
  .catch((error) => console.log(errorMsg(error)));

app.listen(process.env.PORT, (error) => {
  error ? console.log(errorMsg(error)) : console.log(successMsg(`listening port ${process.env.PORT}`));
});
app.use(express.urlencoded({ extended: true }))
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use(express.static('public'));
app.get('/', (req, res) => {
  try {
    Object
      .find()
      .then((objects) => res.render(createPath('index'), { objects }))
  }
  catch (error) { console.log(error) }
}); 
app.get('/*', (req, res) => {
  // let rndCoordsX = Math.round(Math.random() * 2000 * 10000) / 10000;
  // let rndCoordsY = Math.round(Math.random() * 2000 * 10000) / 10000;
  // Object.create({ name: "Zulu", coordsX: rndCoordsX, coordsY: rndCoordsY });
  res.status(200).json({ message: "error 404, page not found" })
})