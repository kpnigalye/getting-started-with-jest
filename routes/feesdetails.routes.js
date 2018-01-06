const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const FeesDetailsModel = require('../models/feesDetails.model');

// Add New FeesDetail record
router.post('/addNewFeesDetails', (req, res, next) => {
    let newFeesDetails = new FeesDetailsModel(req.body);

    FeesDetailsModel.addNewFeesDetails(newFeesDetails, (err, feesDetails) => {
        if (err) {
            res.json({ success: false, msg: err });
        } else {
            res.json({ success: true, msg: 'Added feesDetails record', feesDetails: feesDetails });
        }
    });
});


// Get FeesDetail by Id
router.get('/getFeesDetailById', (req, res, next) => {
    console.log("router: getFeesDetailById : " + JSON.stringify(req.query));
    FeesDetailsModel.getFeesDetailById(req.query.feesDetailsId, (err, feesDetails) => {
        if (err) throw err;
        console.log(feesDetails);
        res.send({ feesDetails: feesDetails });
    });
});

module.exports = router;