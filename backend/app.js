//import Express module
const express = require('express');
// create backend application
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const multer = require('multer');
const path = require('path');
//define image folder destination
app.use('/images', express.static(path.join('backend/images')))
const User = require('./models/user');

// import mongoose module
const mongoose = require('mongoose');

// connect application to DB named soccerDB
// if not exists , create DB , else connect automatically
mongoose.connect('mongodb://localhost:27017/Medilab', { useNewUrlParser: true, useUnifiedTopology: true });

// Security configuration
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, Accept, Content-Type, X-Requested-with, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, OPTIONS, PATCH, PUT"
  );
  next();
});
const MIME_TYPE = {
  'image/png': 'png',
  'image/jpeg': 'jpg',
  'image/jpg': 'jpg'
}
const storage = multer.diskStorage({
  // destination
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE[file.mimetype];
    let error = new Error("Mime type is invalid");
    if (isValid) {
      error = null;
    }
    cb(null, 'backend/images')
  },
  filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(' ').join('-');
    const extension = MIME_TYPE[file.mimetype];
    const imgName = name + '-' + Date.now() + '-crococoder-' + '.' +
      extension;
    cb(null, imgName);
  }

});

app.post('/signup',multer({ storage: storage }).single('image'), (req, res) => {
  console.log("Here in adding user", req.body);
  console.log("Here in adding user", req.file);
  url = req.protocol + '://' + req.get('host');

  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: e = req.body.password,
    spetialite: "",
    tel: e = req.body.tel,
    image: url + '/images/' + req.file.filename
  });
  user.save().then(
    result => {
      res.status(200).json({
        message: 'added successfully'
      })
    }
  );
});
app.post('/login', (req, res) => {
  console.log("LOGIN", req.body);
  User.find({ email: req.body.email, pwd: req.body.pwd }).then(
    data => {
      if (data) {
        res.status(200).json({
          user: data
        })
      }
    }
  );
});
app.get('/displayUser/:id', (req, res) => {
  console.log("***********")
  console.log("here in get ", req.params.id);
  User.find({ _id: req.params.id }).then(
    data => {
      if (data) {
        res.status(200).json({
          user: data
        })
      }
    }
  )

});
module.exports = app;