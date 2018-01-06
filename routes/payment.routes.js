const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const PaymentModel = require('../models/payment.model');

// Register
router.post('/addNewPayment', (req, res, next) => {
  let newPayment = new PaymentModel({
    name: req.body.name,
    
    isDeleted: false
  });

  PaymentModel.addNewStudent(newPayment, (err, user) => {
    if (err) {
      res.json({ success: false, msg: err });
    } else {
      res.json({ success: true, msg: 'Added Payment record', userId: user._id });
    }
  });
});



module.exports = router;