const express = require('express')
const home = require('./modules/home')
const show = require('./modules/show')

const router = express.Router()
router.use('/', home)
router.use('/urlshortener', show)

module.exports = router