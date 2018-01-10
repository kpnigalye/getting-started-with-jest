const mongoose = require('mongoose');
const config = require('../config/database');

const BatchSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    branch: {
        type: String,
        require: true
    },
    year: {
        type: String,
        require: true
    },
    stream:{
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true
    },
    enrolledFor: {
        type: String,
        require: true
    },
    classSession: {
        type: String,
        require: true
    },
    course: {
        type: String,
        require: true
    },
    isDeleted: Boolean
});

const Batch = module.exports = mongoose.model('Batch', BatchSchema);

module.exports.addBatch = function (newbatch, callback) {
    console.log("addBatch");
    newbatch.save(callback);
}

module.exports.listBatches = function (callback) {
    console.log("model.listBatches");
    Batch.find({ isDeleted: false }, callback);
}