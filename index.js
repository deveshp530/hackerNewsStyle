//configuration file
const express = require('express')
const parser = require('body-parser') 
const methodOverride = require('method-override')
var Handlebars     = require('handlebars');
var HandlebarsIntl = require('handlebars-intl');

const app = express()
//Handlebars.registerHelper('dateFormat', require('handlebars-dateformat'));
//HandlebarsIntl.registerWith(Handlebars);

app.set('view engine','hbs')
app.use(parser.urlencoded({extended: true}))
app.use(methodOverride('_method'))
//https://expressjs.com/en/starter/static-files.html
app.use('/assets', express.static('public'))
const newsController = require('./controller/newscontroller')
app.use('/', newsController)

app.listen(3000,() =>{
    console.log('running on port 3000');
})