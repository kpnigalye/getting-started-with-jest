const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// UserModel Schema
const StudentSchema = mongoose.Schema({
    userId: String,
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    classSession: String,
    course: {
        type: String,
        required: true
    },
    branch: {
        type: String,
        required: true
    },
    currentStandard: {
        type: String,
        required: true
    },
    isCombinedAdmission: Boolean,
    contactDetails: [],
    offeredSubjects: String,

    // school section, college section
    category: {
        type: String,
        required: true
    },
    // for category = college section 
    // science, commerce, arts
    stream: {
        type: String,
        required: true
    },
    instituteInfo: {
        name: {
            type: String,
            required: true
        },
        timing: {
            type: String,
            required: true
        },
    },
    //custom fields for science stream
    enrolledFor: {
        type: String,
        required: true
    },
    entrance: String,
    hasEnrolledForEntrance: Boolean,
    isDeleted: Boolean
});

const Student = module.exports = mongoose.model('Student', StudentSchema);

module.exports.getStudentDetailsById = function (id, callback) {
    console.log("model.getStudentDetailsById - " + id);
    Student.findById(id, callback);
}

module.exports.addNewStudent = function (newStudent, callback) {
    console.log("addNewStudent: from model")
    newStudent.save(callback);
}

module.exports.updateStudentInfo = function (userToUpdate, callback) {
    console.log("model.updateStudentInfo - " + userToUpdate._id);
    Student.findByIdAndUpdate(userToUpdate._id, userToUpdate, { upsert: true }, callback);
}

