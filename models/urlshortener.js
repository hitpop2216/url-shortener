const mongoose = require(mongoose)
const Schema = mongoose.Schema
const urlSchema = new Schema({
  url: {
    type: URL,
    required: true
  }
})
module.exports = mongoose.model('URL', urlSchema)