const express = require('express')
const generateURL = require('../../config/generateURL')
const URL = require('../../models/urlshortener')
const router = express.Router()

// 首頁
router.get('/', (req, res) => {
  res.render('index')
})

// shorten
router.post('/', (req, res) => {
  const urlShorten = generateURL()

  URL
    .findOne({ urlOriginal: req.body.url })
    // 輸入相同網址 return 同一網址
    .then(urls => urls ? urls : URL.create({ urlOriginal: req.body.url, urlShorten }))
    .then(urls => {
      return res.render('show', {
        urlOriginal: urls.urlOriginal,
        urlShorten: urls.urlShorten
      })
    })
    .catch(err => console.log(err))
})

module.exports = router