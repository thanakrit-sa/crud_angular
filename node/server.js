const express = require('express')
const app = express()
const BodyParser = require('body-parser')
require('./db')
const schemaModel = require('./schema_register')

app.use(BodyParser.json())
app.use(BodyParser.urlencoded())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE')
    // res.header('Access-Control-Allow-Headers','Content-Type, Option, Authorization')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-access-token')
    res.setHeader('Access-Control-Allow-Credentials', true)
    next();
});


app.get('/', (req, res) => {
    res.end('Success')
})

app.post('/api', (req, res) => {
    const firstname = req.body.firstname
    const lastname = req.body.lastname
    const username = req.body.username
    const password = req.body.password
    const repassword = req.body.repassword
    const email = req.body.email
    // res.end('Result' + firstname + lastname)
    // res.json({ result: "success", firstname:firstname, lastname:lastname})
    schemaModel.create(req.body, (err, doc) => {
        if (err) res.json({ result: "Fail" })
        res.json({result: "Success"})
    })
})

app.listen(3000, () => {
    console.log('Connect');
})