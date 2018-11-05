const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const PaymentModel = require('../models/payment.model');


// Show Balance Fees On Dashboard
router.get('/showBalanceFeesOnDashboard', (req, res, next) => {
  let isPaid = req.query.isPaid;
  let branch = req.query.branch;
  let paymentMonthNo = req.query.paymentMonthNo;
  
  PaymentModel.showBalanceFeesOnDashboard(isPaid, branch, paymentMonthNo, (err, balanceFees) => {
    if (err) throw err;
    res.send({ success: true, balanceFees: balanceFees });
  });
});

// Show Pending Cheque Entries
router.get('/showPendingChequeEntries', (req, res, next) => {
  let isChequeCleared = req.query.isChequeCleared;
  let branch = req.query.branch;
  PaymentModel.showPendingChequeEntries(isChequeCleared, branch, (err, pendingCheques) => {
    if (err) throw err;
    res.send({ success: true, pendingCheques: pendingCheques });
  });
});

// Register
router.post('/addNewPayment', (req, res, next) => {
  let newPayment = new PaymentModel(req.body);

  PaymentModel.addNewPayment(newPayment, (err, payment) => {
    if (err) {
      res.json({ success: false, msg: err });
    } else {
      res.json({ success: true, msg: 'Added Payment record', payment: payment });
    }
  });
});


// Update Payment record
router.post('/updatePaymentDetails', (req, res, next) => {
  let paymentDetailsToUpdate = new PaymentModel(req.body);
  console.log("router: updatePaymentDetails");

  PaymentModel.updatePaymentDetails(paymentDetailsToUpdate, (err, payment) => {
      if (err) {
          res.json({ success: false, msg: err });
      } else {
          res.json({ success: true, msg: 'Payment Details updated', payment: payment });
      }
  });
});

// Get Payment by Id
router.get('/getPaymentById', (req, res, next) => {
    PaymentModel.getPaymentRecordById(req.query.paymentId, (err, payment) => {
      if (err) throw err;
      res.send({ success: true, payment: payment });
    });
  });

  // Get Payment by StudentId
router.get('/getPaymentRecordByStudentId', (req, res, next) => {
  PaymentModel.getPaymentRecordByStudentId(req.query.studentId, (err, paymentDetails) => {
    if (err) throw err;
    res.send({ success: true, paymentDetails: paymentDetails });
  });
});
  


module.exports = router;