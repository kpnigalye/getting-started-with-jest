const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const AcademicYearModel = require('../models/academicyear.model');
const BatchModel = require('../models/batch.model');

// Get FeesDetail by Id
router.get('/getBatchById', (req, res, next) => {
    BatchModel.getBatchById(req.query.id, (err, batch) => {
        if (err) throw err;
        res.send({ success: true, batch: batch });
    });
});

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

// Edit Batch
router.post('/editBatch', (req, res, next) => {

    let batchToUpdate = new BatchModel(req.body);

    BatchModel.editBatch(batchToUpdate, (err, batch) => {
        if (err) {
            res.json({ success: false, msg: err });
        } else {
            res.json({ success: true, batch: batch, msg: 'Batch Updated' });
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
    
    BatchModel.listBatches(req.query.branch, req.query.year, (err, batches) => {
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


router.post('/setCurrentYear', (req, res, next) => {
    console.log("router: setCurrentYear");
    let yearToUpdate = new AcademicYearModel(req.body);

    AcademicYearModel.setCurrentYear(yearToUpdate, (err, year) => {
        if (err) {
            res.json({ success: false, msg: err });
        } else {
            res.json({ success: true, year: year });
        }
    });
});

router.get('/getCurrentYear', (req, res, next) => {
    AcademicYearModel.getCurrentYear((err, year) => {
        if (err) {
            res.json({ success: false, msg: err });
        } else {
            res.json({ success: true, year: year });
        }
    });
});


module.exports = router;