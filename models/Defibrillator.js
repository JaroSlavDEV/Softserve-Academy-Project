const mongoose = require('mongoose');
const {Schema} = mongoose;

const defibrillatorSchema = new Schema({
    name: String,
    description: String,
})

mongoose.model('defibrillators', defibrillatorSchema);