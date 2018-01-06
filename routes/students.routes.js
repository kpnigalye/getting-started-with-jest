const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const config = require('../config/database');
const StudentModel = require('../models/student.model');

// Register
router.post('/addNewStudent', (req, res, next) => {
  let newUser = new StudentModel({
    name: req.body.name,
    phoneNumber: req.body.phoneNumber,
    birthDate: req.body.birthDate,
    password: req.body.password,
    isDeleted: false
  });

  StudentModel.addNewStudent(newUser, (err, user) => {
    if (err) {
      res.json({ success: false, msg: err });
    } else {
      res.json({ success: true, msg: 'Student registered', userId: user._id });
    }
  });
});



module.exports = router;