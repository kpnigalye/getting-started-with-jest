const mongoose = require('mongoose');
const config = require('../config/database');

// UserModel Schema
const PaymentSchema = mongoose.Schema({
    studentId: {
        type: String,
        required: true
    },
    feesDetailsId: {
        type: String,
        required: true
    },
    studentName: {
        type: String,
        required: true
    },
    stream: {
        type: String,
        required: true
    },
    enrolledFor: {
        type: String,
        required: true
    },
    branch: String,
    isPaid: Boolean,
    amount: Number,
    receiptNumber: Number,
    paymentDate: String,
    modeOfPayment: String,
    bankName: String,
    BankBranch: String,
    chequeDate: Date,
    chequeNumber: Number,
    isChequeCleared: Boolean,
    chequeClearanceDate: Date,
    remark: String,
    createdAt: Date,
    isDeleted: Boolean
});

const Payment = module.exports = mongoose.model('Payment', PaymentSchema);

module.exports.showBalanceFeesOnDashboard = function (isPaid, branch, callback) {
    console.log("model.showBalanceFeesOnDashboard");
    Payment.find({ isPaid: isPaid, branch: branch }, callback);
}

module.exports.showPendingChequeEntries = function (isChequeCleared, branch, callback) {
    console.log("model.showPendingChequeEntries");
    Payment.find({ isChequeCleared: isChequeCleared, branch: branch }, callback);
}

module.exports.getPaymentRecordById = function (id, callback) {
    console.log("model.getPaymentRecordById-" + id);
    Payment.findById(id, callback);
}

module.exports.getPaymentRecordByStudentId = function (studentId, callback) {
    console.log("model.getPaymentRecordById-" + studentId);
    Payment.find({ studentId: studentId }, callback);
}

module.exports.addNewPayment = function (newPayment, callback) {
    console.log("addNewPayment: from model")
    newPayment.save(callback);
}

module.exports.updatePaymentDetails = function (paymentDetailToUpdate, callback) {
    console.log("updatePaymentDetails: from model");
    Payment.findByIdAndUpdate(paymentDetailToUpdate._id, paymentDetailToUpdate, { upsert: true }, callback);
}
