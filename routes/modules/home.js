const express = require('express')
const generateURL = require('../../config/generateURL')
const router = express.Router()

// 首頁
router.get('/', (req, res) => {
  res.render('index')
})

router.post('/', (req, res) => {
  const urlOriginal = req.body.url
  const urlShorten = generateURL()
  res.render('show', { urlShorten, urlOriginal})
})

module.exports = router