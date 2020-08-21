const express = require('express')
const faker = require('faker/locale/fr.js')
const moment = require('moment')

const ideasRouter = express.Router()

ideasRouter.get('/ideas', (req, res) => {

    let sixMonthsAgo = moment().subtract(6, 'months').format()
    let today = moment().format()

    sixMonthsAgo = [new Date(sixMonthsAgo), new Date(sixMonthsAgo).getTime()]
    today = [new Date(today), new Date(today).getTime()]

    let getRandomDate = () => {
        let randomDate = faker.random.number({ 'min': sixMonthsAgo[1], 'max': today[1] })
        randomDate = [new Date(randomDate), new Date(randomDate).getTime()]
        return randomDate
    }

    let ideasArray = []
    for (let i = 0; i < faker.random.number({ 'min': 10, 'max': 50 }); i++) {
        const idea = new Object()
        idea.id = i + 1
        idea.title = faker.hacker.phrase()
        idea.createdAt = getRandomDate()
        idea.author = faker.name.findName()
        idea.score = faker.random.number({ 'min': 0, 'max': 50 })
        ideasArray.push(idea)
    }

    res.json(ideasArray)

})

module.exports = ideasRouter