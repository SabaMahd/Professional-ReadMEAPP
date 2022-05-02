const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const readMeSchema = new Schema({
        writtenBy: {
            type: String,
            required: true,
            trim: true
        },
        readMeBody: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        }
});


const Readme = model('Readme', readMeSchema);

module.exports = Readme;