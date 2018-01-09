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

// Update
router.post('/updateStudentInfo', (req, res, next) => {
  console.log("userToUpdate");
  let userToUpdate = new StudentModel(req.body);
  console.log(userToUpdate);

  StudentModel.updateStudentInfo(userToUpdate, (err, student) => {
    if (err) {
      res.json({ success: false, msg: err });
    } else {
      res.json({ success: true, msg: 'Student updated', student: student });
    }
  });
});

// Get FeesDetail by Id
router.get('/getStudentDetailsById', (req, res, next) => {
  StudentModel.getStudentDetailsById(req.query.studentId, (err, student) => {
      if (err) throw err;
      res.send({ success: true, student: student });
  });
});

// Search School section students By Parameters
router.get('/searchSchoolSectionStudents', (req, res, next) => {
  console.log(req.query);
  StudentModel.searchSchoolSectionStudents(req.query, (err, students) => {
    if (err) {
      res.json({ success: false, msg: err });
    } else {
      res.json({ success: true, students: students });
    }
  });
});

// Search School section students By Parameters
router.get('/searchCollegeSectionStudents', (req, res, next) => {
  console.log(req.query);
  StudentModel.searchCollegeSectionStudents(req.query, (err, students) => {
    if (err) {
      res.json({ success: false, msg: err });
    } else {
      res.json({ success: true, students: students });
    }
  });
});


module.exports = router;