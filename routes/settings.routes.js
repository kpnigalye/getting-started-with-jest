const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const AcademicYearModel = require('../models/academicyear.model');
const BatchModel = require('../models/batch.model');

// Add New Batch
router.post('/addBatch', (req, res, next) => {

    let newBatch = new BatchModel(req.body);

    BatchModel.addBatch(newBatch, (err, batch) => {
        if (err) {
            res.json({ success: false, msg: err });
        } else {
            res.json({ success: true, batch: batch, msg: 'Batch Added' });
        }
    });
});

// Add New Batch
router.post('/addAcademicYear', (req, res, next) => {

    let newAcademicYear = new AcademicYearModel(req.body);
    
    AcademicYearModel.addAcademicYear(newAcademicYear, (err, year) => {
        if (err) {
            res.json({ success: false, msg: err });
        } else {
            res.json({ success: true, year: year, year: 'Batch Added' });
        }
    });
});


// Search School section students By Parameters
router.get('/listBatches', (req, res, next) => {
    console.log(req.query);
    BatchModel.listBatches(req.query, (err, batches) => {
        if (err) {
            res.json({ success: false, msg: err });
        } else {
            res.json({ success: true, batches: batches });
        }
    });
});

// Search School section students By Parameters
router.get('/listAcademicYears', (req, res, next) => {
    AcademicYearModel.listAcademicYears((err, years) => {
        if (err) {
            res.json({ success: false, msg: err });
        } else {
            res.json({ success: true, years: years });
        }
    });
});


module.exports = router;