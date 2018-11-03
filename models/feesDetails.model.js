const mongoose = require('mongoose');
const config = require('../config/database');

// FeesDetail Schema
const FeesDetailSchema = mongoose.Schema({
    studentId: {
        type: String,
        required: true
    },
    isPaid: Boolean,
    totalFees: {
        type: Number,
        required: true
    },
    concession: {
        type: Number,
        required: true
    },
    totalFeesToPay: {
        type: Number,
        required: true
    },
    totalPaidFees: Number,
    totalInstallmentAmount: Number,
    expectedDateOfCompletion: Date,
    isDeleted: Boolean
});

const FeesDetail = module.exports = mongoose.model('FeesDetail', FeesDetailSchema);

module.exports.getFeesDetailsById = function (id, callback) {
    console.log("model.getFeesDetailsById-" + id);
    FeesDetail.findById(id, callback);
}

module.exports.getFeesDetailsByStudentId = function (studentId, callback) {
    console.log("model.getFeesDetailsByStudentId-" + studentId);
    FeesDetail.findOne({ studentId : studentId}, callback);
}

module.exports.addNewFeesDetails = function (newFeesDetail, callback) {
    console.log("addNewFeeDetail: from model")
    newFeesDetail.save(callback);
}

module.exports.updateFeesDetails = function (feesDetailToUpdate, callback) {
    console.log("updateFeesDetails: from model");
    FeesDetail.findByIdAndUpdate(feesDetailToUpdate._id, feesDetailToUpdate, callback);
}

