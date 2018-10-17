const csv = require('csvtojson')
const fs = require('fs')
let newJSON

const parseFunction = () => {
  csv()
  .fromFile('./bigData.csv')
  .then((json) => {
    newJSON = {}

    const countries = []

    // This functions filters out certain data to write to our new JSON object which is called newJSON
    for(let objCount = 0; objCount < json.length; objCount += 1) {
      countries.push(json[objCount].stateabb)
    }

    newJSON.countries = countries

    fs.writeFile('./bigData.json', JSON.stringify(newJSON, null, 2), (err) => {
      if (err) console.log(err)
    })
  })
}

parseFunction()
