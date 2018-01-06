const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const StudentModel = require('../models/student.model');

// Register
router.post('/addNewStudent', (req, res, next) => {
  let newUser = new StudentModel(req.body);

  StudentModel.addNewStudent(newUser, (err, student) => {
    if (err) {
      res.json({ success: false, msg: err });
    } else {
      res.json({ success: true, msg: 'Student registered', student: student });
    }
  });
});



module.exports = router;