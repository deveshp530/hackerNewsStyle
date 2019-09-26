const News = require('../models/news');

const seeds = require('./seeds.json');

News.deleteMany({})
    .then(() => {
        return News.collection.insertMany(seeds);
    }).catch(err => {
        console.error(err);
    }).then(() => {
        console.log("Data successfully seeded!")
        process.exit();
    })