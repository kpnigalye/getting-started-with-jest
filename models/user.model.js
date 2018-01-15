const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// UserModel Schema
const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: Number,
    required: true
  },
  branch: {
    type: String,
    required: true
  },
  birthDate: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  isActive: Boolean,
  isDeleted: Boolean
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function (id, callback) {
  console.log("model.getUserById-" + id);

  User.findById(id, callback);
}

module.exports.getUserByEmail = function (email, callback) {
  const query = { email: email }
  User.findOne(query, callback);
}

module.exports.addUser = function (newUser, callback) {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) throw err;
      console.log(newUser);
      newUser.password = hash;
      newUser.save(callback);
    });
  });
}

module.exports.comparePassword = function (candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if (err) throw err;
    callback(null, isMatch);
  });
}