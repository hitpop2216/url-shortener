const express = require('express')
const exphbs = require('express-handlebars')
const router = require('./routes')
require('./config/mongoose')

const PORT = 3000
const app = express()
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs'}))
app.set('view engine', 'hbs')

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(router)

app.listen(PORT, () => {
  console.log(`The app is running on http://localhost:${PORT}`)
})