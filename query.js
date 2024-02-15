const db = require('./db')
const { Flight, Airport } = require('./models')

const findFlight = async () => {
    const flights = await Flight.find()
    console.log(flights)
}

const createFlight = async () => {
    // const airport = await Airport.findOne()
    const miaAirport = await Airport.find({ name: 'Miami International Airport' })
    const lgwAirport = await Airport.find({ name: 'London Gatwick Airport' })

    let flight = await Flight.create({
        airline: 'United',
        flight_number: 0,
        price: 0,
        number_of_Seats: 0,
        departingAirport_id: lgwAirport[0]._id,
        arrivalAirport_id: miaAirport[0]._id,
        departure_date: '',
        departure_time: ''
    })
    console.log(flight)
}

const updateFlight = async () => {
    const updated = await Flight.updateOne(
        { airline: 'Delta' },
        { airline: 'American Airlines' }
    )
    console.log(updated)
  }
  
  const deleteFlight = async () => {
    let deleted = await Flight.deleteOne({ airline: 'Delta' })
    console.log(deleted)
  }

async function main() {
  try {
    await findFlight()
    await createFlight()
    await updateFlight()
    await deleteFlight()
      
  } catch (error) {
      console.log(error)
  } finally {
      await db.close()
  }
}

main()