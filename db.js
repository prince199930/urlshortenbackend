const mongoose = require("mongoose");
const dotenv = require('dotenv')
dotenv.config({path:'./config.env'})

//mongodb Connection string to connect DataBase
const mongoURI = process.env.DATABASE

const connectToMongo = () => {
    mongoose.connect(mongoURI,{ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },() => {
        console.log("Connected to Mongo Successfully");
    })
}
module.exports = connectToMongo;
