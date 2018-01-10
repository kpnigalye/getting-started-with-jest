const mongoose = require('mongoose');
const config = require('../config/database');

const AcademicYearSchema = mongoose.Schema({
    year: {
        type: String,
        require: true
    },
    isCurrentYear: {
        type: Boolean,
        require: true
    },
    isDeleted: Boolean
});

const AcademicYear = module.exports = mongoose.model('AcademicYear', AcademicYearSchema);

module.exports.addAcademicYear = function (academicYear, callback) {
    console.log(academicYear);
    console.log("academicYear: from model")
    academicYear.save(callback);
}

module.exports.listAcademicYears = function (callback) {
    console.log("model.listAcademicYears");
    const query = { "isDeleted": false }
    AcademicYear.find(query, callback);
}