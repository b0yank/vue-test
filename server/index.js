const path = require('path')
const express = require('express')
const app = express()
const pokedex = require('./pokedex.json')

const MAX_POKEMONS = 20

const cors = require('cors')
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  let count = MAX_POKEMONS
  if (req.query.count && req.query.count > 0) {
    count = Math.min(req.query.count, MAX_POKEMONS)
  }

  return res.send(
    pokedex.slice(0, count).map(p => ({
      id: p.id,
      name: p.name.english,
      base: p.base,
      type: p.type,
      image: `00${p.id}`.slice(-3) + '.png'
    }))
  )
})

const port = 8081
app.listen(port, () => console.log('Listening on port', port))
