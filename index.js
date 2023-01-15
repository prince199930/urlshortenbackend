const connectToMongo = require('./db');
const express = require('express')
const dotenv = require('dotenv')
dotenv.config({path:'./config.env'})
var cors = require('cors')
connectToMongo();
const app = express()
app.use(cors())
app.use(express.json())
const PORT = process.env.PORT || 8000;

//Available routes
app.use('/api/url', require('./routes/urlshort'))

app.listen(PORT, () => {
  console.log(`urlshortner backend listening at http://localhost:${PORT}`)
})

