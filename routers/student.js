const express = require('express')
const router = express.Router()
const Mongo = require('../model/Mongo')

router.get('/add', async (req, res) => {
    res.render('addPeople')
})

router.post('/add', async (req, res) => {
    const {
        name,
        surname,
        number,
        group,
        month,
        score
    } = req.body

    const people = new Mongo({
        name,
        surname,
        number,
        group,
        month,
        score
    })

    await people.save()
    res.redirect('/')
})

router.get('/:id', async (req, res) => {
    const peopleFind = await Mongo.findById(req.params.id)
    res.render('people', {
        people: peopleFind
    })
})

router.post('/score/:id', async (req, res ) => {
    const peopleScore = {
        score: (+req.body.oldScore + +req.body.score)
    }
    const addScore = await Mongo.findByIdAndUpdate(req.params.id, peopleScore)
    res.redirect('/')
})

router.get('/peoples/:month', async (req, res) => {
    const findPeople = await Mongo.find({month: {$eq: req.params.month}}).sort({score: -1})
    res.render('month', {
        findPeople
    })
})



module.exports = router