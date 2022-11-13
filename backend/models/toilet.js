import  Schema from 'mongoose'
import db from '../config/db.js'

var Toilet = db.model('Toilet', {
    longitude: {type: Number, required: true},
    latitude: {type: Number, required: true},
    name: {type: String, required: true},
    opening_hours: String,
    ratings: [{
        username: String,
        date: Date,
        stars: {type: Number, min: 1, max: 5},
        content: String
    }],
    isfree: Boolean,
    price: Number
})

export default Toilet