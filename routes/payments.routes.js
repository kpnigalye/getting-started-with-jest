const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const PaymentModel = require('../models/payment.model');

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