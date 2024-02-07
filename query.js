const db = require('./db')
const { Flight, Airport } = require('./models')



const findFlight = async () => {
    const flights = await Flight.find()
    console.log(flights)
}


async function main() {
  try {
      await findFlight()
      
  } catch (error) {
      console.log(error)
  } finally {
      await db.close()
  }
}

main()