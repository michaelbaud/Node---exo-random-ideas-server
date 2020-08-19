const express = require('express')
const faker = require('faker/locale/fr.js')
const moment = require('moment')

const routerIdeas = express.Router()

class Idea {
    constructor(id, title, createdAt, author, score) {
        this.id = id
        this.title = title
        this.createdAt = createdAt
        this.author = author
        this.score = score
    }
}

routerIdeas.get('/ideas', (req, res) => {
    async function createListIdeas() {

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
            const idea = await new Idea(
                i + 1,
                faker.hacker.phrase(),
                getRandomDate(),
                faker.name.findName(),
                faker.random.number({ 'min': 0, 'max': 50 })
            )
            ideasArray.push(idea)
        }

        res.json(ideasArray)
    }

    createListIdeas()

})



module.exports = routerIdeas