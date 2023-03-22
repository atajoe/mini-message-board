const express = require('express');
const router = express.Router();
let messages = []

router.use((req,res,next) => {
    console.log('App.use messages: ', messages)
    next()
})
router.get('/', (req,res,next) => {
    res.send('<h1>Lol default page for now</h1>')
})
router.get('/new', (req,res,next) => {
    res.render('form', {title: 'Fill out form'});
})

router.post('/new', (req,res,next) => {
    messages.push(req.body)
    res.redirect('/messages')
})

module.exports = router;