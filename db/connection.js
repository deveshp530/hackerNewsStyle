const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/seirnews',{ useNewUrlParser: true }, () => {
    console.log("We connected!!!")
  })

mongoose.Promise = Promise
module.exports = mongoose