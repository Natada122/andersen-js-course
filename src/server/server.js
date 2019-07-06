/* eslint-disable no-console */
const cors = require('cors');

const express = require('express');
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const router = require('./app/routes');

const app = express();
app.use(cors());
const db = require('./config/db');

mongoose.connect(db.url);

const port = 8000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
MongoClient.connect(db.url, err => {
  if (err) {
    console.log(err);
  } else {
    router(app);
    app.listen(port, () => {
      console.log(`Наш порт: ${port}`);
    });
  }
});
