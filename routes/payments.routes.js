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


// Get Payment by Id
router.get('/getPaymentRecordById', (req, res, next) => {
    console.log("router: getPaymentRecordById : " + JSON.stringify(req.query));
    PaymentModel.getPaymentRecordById(req.query.paymentId, (err, user) => {
      if (err) throw err;
      console.log(user);
      res.send({ user: user });
    });
  });



module.exports = router;