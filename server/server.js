const Object = require('../models/object');
const express = require('express');
const app = express();
const morgan = require('morgan');
const chalk = require('chalk');
const errorMsg = chalk.bgKeyword('white').red;
const successMsg = chalk.bgKeyword('white').green;
const createPath = require('../helpers/create-path');
const { infiniteReqs } = require('./infiniteReqs')
require('dotenv').config()
const mongoose = require('mongoose');
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
app.get('/getObjects', (req, res) => {
  Object
  .find()
  .then((objects) => res.json({ objects }));
});
app.get('/*', (req, res) => {
  // Object.create({ name: "Zulu", coordsX: rndCoordsX, coordsY: rndCoordsY });
  res.status(200).json({ message: "error 404, page not found" })
})
setInterval(infiniteReqs, 1000);