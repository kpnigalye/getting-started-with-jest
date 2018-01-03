const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const config = require('../config/database');
const UserModel = require('../models/user.model');

// Register
router.post('/register', (req, res, next) => {
  let newUser = new UserModel({
    name: req.body.name,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    birthDate: req.body.birthDate,
    password: req.body.password,
    isDeleted: false,
    isAdmin: false
  });

  UserModel.addUser(newUser, (err, user) => {
    if (err) {
      res.json({ success: false, msg: err });
    } else {
      res.json({ success: true, msg: 'User registered' });
    }
  });
});

// Authenticate
router.post('/authenticate', (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  UserModel.getUserByEmail(email, (err, user) => {
    if (err) throw err;
    if (!user) {
      return res.json({
        success: false,
        msg: 'User not found'
      });
    }

    UserModel.comparePassword(password, user.password, (err, isMatch) => {
      if (err) throw err;

      if (isMatch) {
        const token = jwt.sign(user.toJSON(), config.secret, {
          expiresIn: 86400 // 1 day
        });

        res.json({
          success: true,
          token: 'JWT ' + token,
          user: {
            id: user._id,
            name: user.name,
            email: user.email,
            phoneNumber: user.phoneNumber,
            birthDate: user.birthDate
          }
        });
      } else {
        return res.json({ success: false, msg: 'Wrong password' });
      }
    });
  })
});

// Profile
router.get('/profile', passport.authenticate('jwt', { session: false }), (req, res, next) => {
  res.send({ user: req.user });
});

module.exports = router;
