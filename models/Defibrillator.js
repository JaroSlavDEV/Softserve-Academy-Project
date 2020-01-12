const mongoose = require('mongoose');
const { Schema } = mongoose;

/*
    Model 'Defibrillator'
    
    11 properties

    title - String
    address - String
    location - Object (with properties: type - String and coordinates - Array[Number])
    actual_date - Date
    floor - Number
    storage_place - String
    accessibility - String
    language - String
    informational_plates - Boolean
    phone - Array[String]
    additional_information - String

    Note
    In property 'location.coordinates' is Array coordinates of the current address.
    In this Array first element is 'longitude'(!) and second 'latitude'(!).
    It is a feature of GeoJSON type in MongoDB.
*/

const defibrillatorSchema = new Schema({

    title: { 
        type: String, 
        required: true 
    },
    
    address: { 
        type: String, 
        required: true 
    },

    location: {
        type: {
            type: String, 
            enum: ['Point'],
            required: true
        },

        coordinates: {
            type: [Number],
            required: true
        }
    },

    actual_date: { 
        type: Date, 
        required: true 
    },

    floor: { 
        type: Number, 
        required: true 
    },

    storage_place: { 
        type: String, 
        required: true 
    },

    accessibility: { 
        type: String, 
        required: true 
    },

    language: { 
        type: String, 
        required: true 
    },

    informational_plates: { 
        type: Boolean, 
        required: true 
    },

    phone: { 
        type: [String], 
        required: true 
    },

    additional_information: { 
        type: String, 
        required: false 
    }

})

mongoose.model('defibrillators', defibrillatorSchema);