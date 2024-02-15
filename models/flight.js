const { Schema } = require('mongoose')

const Flight = new Schema (
    {
        airline: { type: String, required: true },
        flight_number: {type: Number},
        price: {type: Number},
        number_of_Seats: {type: Number},
        departingAirport_id: {type: Schema.Types.ObjectId, ref: 'airport_id'},
        arrivalAirport_id: {type: Schema.Types.ObjectId, ref: 'airport_id'},
        departure_date: {},
        departure_time: {}

    },
    {timestamps: true}
)
module.exports = Flight