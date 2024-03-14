const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const objectSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    coordsX:{
    type: Number,
    required: true,
    },
    coordsY:{
        type: Number,
        required: true,
    }
}, { timestamps: true });



const Object = mongoose.model('Object', objectSchema);
module.exports = Object;