//configuration file
const express = require('express')
const parser = require('body-parser') 
const methodOverride = require('method-override')

const app = express()

app.set('view engine','hbs')
app.use(parser.urlencoded({extended: true}))
app.use(methodOverride('_method'))

const newsController = require('./controller/newscontroller')
app.use('/', newsController)

app.listen(3000,() =>{
    console.log('running on port 3000');
})