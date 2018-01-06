const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
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
    idPaid: Boolean,
    amount: Number,
    receiptNumber: Number,
    paymentDate: String,
    modeOfPayment: String,
    bankName: String,
    branch: String,
    chequeDate: Date,
    chequeNumber: Number,
    isChequeCleared: Boolean,
    chequeClearanceDate: Date,
    remark: String,
    createdAt: Date,
    isDeleted: Boolean
});

const Payment = module.exports = mongoose.model('Payment', PaymentSchema);

module.exports.getPaymentRecordById = function (id, callback) {
    console.log("model.getPaymentRecordById-" + id);

    Payment.findById(id, callback);
}

module.exports.addNewPayment = function (newPayment, callback) {
    console.log("addNewPayment: from model")
    newPayment.save(callback);
}

