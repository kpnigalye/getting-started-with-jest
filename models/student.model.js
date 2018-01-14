const mongoose = require('mongoose');
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
    currentYear: {
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
    // for school section : English , Marathi, Semi
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

module.exports.searchSchoolSectionStudents = function (params, callback) {
    console.log("model.searchSchoolSectionStudents - " + params);
    Student.find({
        "branch": params.branch, "stream": params.stream, "stream": params.stream,
        "currentStandard": params.enrolledFor, "category": params.category,
        "course": params.course, "classSession": params.classSession
    }
        , callback);
}

module.exports.searchCollegeSectionStudents = function (params, callback) {
    console.log("model.searchCollegeSectionStudents - " + params);
    if (params.entrance) {
        Student.find({
            "branch": params.branch, "stream": params.stream, "stream": params.stream, "currentStandard": params.enrolledFor,
            "category": params.category, "course": params.course, "classSession": params.classSession, "entrance": params.entrance
        }
            , callback);
    }
    else {
        Student.find({
            "branch": params.branch, "stream": params.stream, "stream": params.stream, "currentStandard": params.enrolledFor,
            "category": params.category, "course": params.course, "classSession": params.classSession
        }
            , callback);
    }
}