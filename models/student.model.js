const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// UserModel Schema
const StudentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password:{
      type: String,
      required:true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    birthDate: {
        type: String,
        required: true
    },
    
    isDeleted: Boolean
});

const Student = module.exports = mongoose.model('Student', UserSchema);

module.exports.getStudentUserById = function (userId, callback) {
    
}

module.exports.getStudentById = function (id, callback) {
    
}

module.exports.addNewStudent = function (newStudent, callback) {
    newStudent.save(callback);
}
