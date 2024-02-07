const db = require('../db')
const { Airport } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const airport = [
        {
            name: 'Hartsfield-Jackson Atlanta International Airport',
            location: 'Atlanta, GA, US',
            code: 'ATL'
          },
          {
            name: 'Cleveland Hopkins International Airport',
            location: 'Cleveland, OH, US',
            code: 'CLE'
          },
          {
            name: 'Tampa International Airport',
            location: 'Tampa, FL, US',
            code: 'TPA'
          },
          {
            name: 'Miami International Airport',
            location: 'Miami, FL, US',
            code: 'MIA'
          },
          {
            name: 'London Gatwick Airport',
            location: 'Horley, UK',
            code: 'LGW'
          }
    ]
    await Airport.insertMany(airport)
    console.log('inserted airports!')
}

const run = async () => {
    await main()
    db.close()
}

run()