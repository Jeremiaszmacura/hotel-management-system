const mongoose = require('mongoose')
const Schema = mongoose.Schema

const { DishSchema } = require('./dish')

const ServiceSchema = new Schema({
    id: {
        type: Number,
        required: 'Kindly enter the id for service',
        unique: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        default: null
    },
    startsAt: {
        type: Date,
        required: 'Kindly enter the start date for service'
    },
    endsAt: {
        type: Date,
        required: 'Kindly enter the end date for service'
    },
    price: {
        type: Number,
        default: 0
    },
    service: {
        type: String,
        enum: ['linen', 'tower', 'food', 'other'],
        comment: String,
        required: 'Kindly enter the type for service'
    },
    dishes: [DishSchema],
    status: {
        type: String,
        enum: ['pending', 'progress', 'done'],
    }
})

const Service = mongoose.model('Service', ServiceSchema)

module.exports = {
    Service
}
