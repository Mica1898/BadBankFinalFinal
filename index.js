const express = require('express')
const app = express()
const admin = require('./admin')
const cors = require('cors')
const dal = require('./dal.js')


//used to serve static files from public directory
app.use(express.static('public'))
app.use(cors())

async function verifyToken(req, res, next) {
    const token = req.headers.authorization;

    if(token) {
        admin.auth().verifyIdToken(token)
        .then(decodedToken => {
            console.log("Decoded Token: ", decodedToken)
            return next();
        }).catch(err => {
            return res.status(401).send('Unauthorized')
        })
    }
    else {
        return res.status(401).send('No token found')
    }
}

// create user account
app.get('/account/create/:name/:email/:password', function (req, res) {
    //else create user
    dal.create(req.params.name, req.params.email, req.params.password).
        then((user) => {
            console.log(user)
            res.send(user)
        })
})

// find One
app.get('/account/:email', verifyToken, (req, res) => {
    dal.findOne(req.params.email)
        .then(user => {
            console.log(user)
            res.send(user)
        })
})

// deposit/ withdraw
app.get('/account/update/:email/:amount', verifyToken,  (req, res) => {
    const params = req.params

    dal.update(req.params.email, parseInt(params.amount)).
        then((user) => {
            console.log(user)
            res.send(user)
        })
})

// // withdraw
// app.get('/account/withdraw/:email/:amount', function (req, res) {
//     dal.withdraw(req.params.email, parseInt(req.params.amount)).
//     then((user) => {
//     console.log(user)
//     res.send(user)
//     })
//     })

// balance
// app.get('/account/balance/:email/:balance', function (req, res) {
//     dal.findOne(req.params.email).
//         then((user) => {
//             console.log(user)
//             res.send(user)
//         })
// })


//all accounts
app.get('/account/all', function (req, res) {

    dal.all().
        then((docs) => {
            console.log(docs)
            res.send(docs)
    }).catch(err => console.log(err))
})


var port = process.env.PORT || 3000
app.listen(port)
console.log('Running on port' + port)