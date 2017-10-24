var express = require("express")
var path = require("path")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")

var app = express()
app.use(express.static(path.join(__dirname, './static/dist')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/exam-2', {useMongoClient: true})

const ProductSchema = new mongoose.Schema({
    productNumber: {
        type: Number,
        required: true,
    },
    bids: Array,
}, {timestamps: true})

mongoose.model('Product', ProductSchema)
const Product = mongoose.model('Product')

const auctionSchema = new mongoose.Schema({
    over: {
        type: Boolean,
        required: true,
    },
    secret: String,
    endedBy: String,
}, {timestamps: true})
mongoose.model('Auction', auctionSchema)
const Auction = mongoose.model('Auction')

// let baseAuction = new Auction()
// baseAuction.over = false
// baseAuction.secret = "cheesyfeet"
// baseAuction.save( err =>{
//     console.log("Base auction created", err)
// })

app.post("/bid", (req, res) => {
    console.log('You want to update a product', req.body)
    Product.update(
        {_id: req.body.product},
        {bids: req.body.bids},
        err => {
            console.log("Update done, errors:", err)
            if (err){
                res.sendStatus(400)
            } else {
                res.sendStatus(200)
            }
        }
    )
})



app.post("/auction/end", (req, res) => {
    Auction.update(
        {secret: 'cheesyfeet'},
        {over: true, endedBy: req.body.name},
        err => {
            console.log("Auction ended, errors:", err)
            if (err){
                res.sendStatus(400)
            } else {
                res.sendStatus(200)
            }
        }
    )

})

app.get("/auction/reset", (req, res) => {
    Auction.update(
        {secret: 'cheesyfeet'},
        {over: false},
        err => {
            console.log("Auction ended, errors:", err)
            if (err){
                res.sendStatus(400)
            } else {
                res.sendStatus(200)
            }
        }
    )
})

app.get("/auction/status", (req, res) => {
    Auction.find(
        {secret: 'cheesyfeet'},
        (err, data) => {
            console.log('We found an auction', data)
            if (data[0].over){
                res.send({over: true, name: data[0].endedBy})
            } else {
                res.send({over: false})
            }
        }
    )
})



app.get("/product", (req, res) => {
    console.log('You asked for products')
    let results = []
    Product.find({}, (err, notes) => {
        if (err) { 
            res.sendStatus(400)
        } else {
            for (let note of notes){
                results.push(note)
            }
            console.log("Sending them back", results)
            res.send(results)
        }
    })
})

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./static/dist/index.html"))
});

app.listen(8888, function(){
    console.log("I live! Port 8888, come check it out.")
})