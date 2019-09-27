const express = require('express');
const router = express.Router();

const News = require("../models/news");
const Comments = require("../models/comments")

router.delete('/:id',(req,res) =>{
    News.findOneAndDelete({_id: req.params.id}).then(()=> 
    res.redirect('/'))});

router.post('/', (req, res) => {
    News.create(req.body) .then(news => {
        res.redirect('/');
    })
})

router.post('/:id',(req,res) =>{
    Comments.create(req.body).then(comment => {
        console.log(comment);
        News.findOneAndUpdate({_id: req.params.id}, {$set: {comment: comment }})
    }).then( news =>{
        console.log(news);
        res.redirect('/:id');
    }).catch(err => console.error(err));
})

router.get('/', (req, res) => {
    News.find({}).sort({date: -1}).then(news => {
        res.render('index', { news });
    });
});

router.get('/new', (req, res) => {
    res.render('new');
});

//page for individual news item: 
router.get("/:id", (req, res) => {
    News.findOne({_id: req.params.id}).then(news => {
        res.render('show', news);
    });
});

module.exports = router;