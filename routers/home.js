const express = require('express')
const router = express.Router()
const Mongo = require('../model/Mongo')

router.get('/', async (req, res) => {
    const people = await Mongo.find().sort({ score: -1 })
    res.render('index', {
        people
    })
})

router.get('/all/:search', async (req, res) => {
    const people = await Mongo.find()
    const peop = people.filter(item => item.name.toLowerCase().includes(req.params.search) || item.surname.toLowerCase().includes(req.params.search))
    
    res.send(peop)
})

module.exports = router