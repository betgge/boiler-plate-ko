const express = require('express')
const app = express()
const port = 5000
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://mark:Betgge00425!@boiler-plate.0yymg.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:false
}).then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello World! npm명령어, mongoDB, mongoose를 배웠다.'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))