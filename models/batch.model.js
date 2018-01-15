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
    stream: {
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
    // only for science stream
    entrance: String,
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

module.exports.getBatchById = function (id, callback) {
    console.log("model.getBatchById-" + id);
    Batch.findById(id, callback);
}

module.exports.addBatch = function (newbatch, callback) {
    console.log("addBatch");
    newbatch.save(callback);
}

module.exports.editBatch = function (batchToUpdate, callback) {
    console.log("editBatch");
    Batch.findByIdAndUpdate(batchToUpdate._id, batchToUpdate, callback);
}

module.exports.listBatches = function (branch, year, callback) {
    console.log("model.listBatches");
    const query = { "isDeleted": false, 'branch': branch, 'year': year }
    Batch.find(query, callback);
}