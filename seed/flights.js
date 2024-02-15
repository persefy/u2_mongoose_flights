const db = require('../db')
const { Flight, Airport } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
const atlAirport = await Airport.find({ name: 'Hartsfield-Jackson Atlanta International Airport' })
const cleAirport = await Airport.find({ name: 'Cleveland Hopkins International Airport' })
const tpaAirport = await Airport.find({ name: 'Tampa International Airport' })
const miaAirport = await Airport.find({ name: 'Miami International Airport' })
const lgwAirport = await Airport.find({ name: 'London Gatwick Airport' })

const flights = [
    {
      airline: 'Delta',
      flight_number: 0,
      price: 0,
      number_of_Seats: 0,
      departingAirport_id: atlAirport[0]._id,
      arrivalAirport_id: miaAirport[0]._id,
      departure_date: '',
      departure_time: ''
    },
    {
      airline: 'Delta',
      flight_number: 0,
      price: 0,
      number_of_Seats: 0,
      departingAirport_id: miaAirport[0]._id,
      arrivalAirport_id: atlAirport[0]._id,
      departure_date: '',
      departure_time: ''
    },
    {
      airline: 'Frontier',
      flight_number: 0,
      price: 0,
      number_of_Seats: 0,
      departingAirport_id: atlAirport[0]._id,
      arrivalAirport_id: cleAirport[0]._id,
      departure_date: '',
      departure_time: ''
    },
    {
      airline: 'Frontier',
      flight_number: 0,
      price: 0,
      number_of_Seats: 0,
      departingAirport_id: cleAirport[0]._id,
      arrivalAirport_id: atlAirport[0]._id,
      departure_date: '',
      departure_time: ''
    },
    {
      airline: 'JetBlue',
      flight_number: 0,
      price: 0,
      number_of_Seats: 0,
      departingAirport_id: atlAirport[0]._id,
      arrivalAirport_id: tpaAirport[0]._id,
      departure_date: '',
      departure_time: ''
    },
    {
      airline: 'JetBlue',
      flight_number: 0,
      price: 0,
      number_of_Seats: 0,
      departingAirport_id: tpaAirport[0]._id,
      arrivalAirport_id: lgwAirport[0]._id,
      departure_date: '',
      departure_time: ''
    },
    {
      airline: 'JetBlue',
      flight_number: 0,
      price: 0,
      number_of_Seats: 0,
      departingAirport_id: lgwAirport[0]._id,
      arrivalAirport_id: atlAirport[0]._id,
      departure_date: '',
      departure_time: ''
    }
    
  ]
  await Flight.insertMany(flights)
  console.log('Created flights with airports!')
}
const run = async () => {
  await main()
  db.close()
}

run()