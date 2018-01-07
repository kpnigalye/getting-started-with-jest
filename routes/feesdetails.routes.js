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

// Update FeesDetail record
router.post('/updateFeesDetails', (req, res, next) => {
    let feesDetailsToUpdate = new FeesDetailsModel(req.body);

    console.log("router: updateFeesDetails");
    console.log(feesDetailsToUpdate);

    FeesDetailsModel.updateFeesDetails(feesDetailsToUpdate, (err, feesDetails) => {
        if (err) {
            res.json({ success: false, msg: err });
        } else {
            res.json({ success: true, msg: 'FeesDetails record updated', feesDetails: feesDetails });
        }
    });
});


// Get FeesDetail by Id
router.get('/getFeesDetailsById', (req, res, next) => {
    console.log("router: getFeesDetailsById : " + JSON.stringify(req.query));
    FeesDetailsModel.getFeesDetailsById(req.query.feesDetailId, (err, feesDetails) => {
        if (err) throw err;
        console.log(feesDetails);
        res.send({ feesDetails: feesDetails });
    });
});

module.exports = router;