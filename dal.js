// const { UserImportBuilder } = require('firebase-admin/lib/auth/user-import-builder')

const MongoClient = require('mongodb').MongoClient
const url         = 'mongodb+srv://mica1898:Illustrate!123@cluster0.e2u1hym.mongodb.net/?retryWrites=true&w=majority'
let db            = null

// connect to mongo
MongoClient.connect(url, {useUnifiedTopology: true}, function(err, client){
    console.log("Connected successfully to db server")

    // connect to myproject database
    db = client.db('myproject')
})

//create user account
function create(name, email, password){
    return new Promise((resolve, reject) => {
        const collection = db.collection('users')
        const doc = {name, email, password, balance: 0}
        collection.insertOne(doc, {w:1}, function(err, result) {
            err ? reject(err) : resolve(doc)
        })
    })
}

//find user account
function findOne(email){
    return new Promise((resolve, reject) => {
        const collection = db
        .collection('users')
        .findOne({email: email})
        .then((doc) => resolve(doc))
        .catch((err) => reject(err))
    })
}

//update - deposit/withdraw amount
function update(email, amount){
    return new Promise((resolve, reject) => {
        const collection = db
        .collection('users')
        .findOneAndUpdate(
            {email: email},
            {$inc: {balance: amount}},
            {returnOriginal: false},
            function(err, documents) {
                err ? reject(err) : resolve(documents)
            }
        )
    })
}


// all users
function all(){
    return new Promise((resolve, reject) => {
        const customers = db
        .collection('users')
        .find({})
        .toArray(function(err, docs){
            console.log(docs)
            err ? reject(err) : resolve(docs)
        })
    })
}

module.exports = {create, all, update, findOne}