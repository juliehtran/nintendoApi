// Worked with Gardner Gang: Wade, Tanecia, Dashlin, Asianna, Ziya, Brian
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 8080

const data = require('./info.js')

app.use(cors())
app.use(express.static('client'))
app.get('/', (request, response) => {
  response.sendFile(__dirname + '/client/index.html')
})

app.get('/api/nintendo/:year', (request, response) => {
  const getYear = request.params.year
  console.log(getYear)
  let result = data.find((gameConsole => gameConsole.year.includes(getYear)))
  if (result === undefined) {
    response.json({ name: 'No consoles released this year, try another year!', imageUrl: 'None', description: 'Nadah', year: 'None' })
  }
  else {
    response.json(result)
  }
})

app.listen(PORT, () => {
  console.log(`This is running on port ${PORT}`)
})
