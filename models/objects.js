const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const objectsSchema = new Schema({
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
});



const Objects = mongoose.model('objectsCollection', objectsSchema);
module.exports = Objects;