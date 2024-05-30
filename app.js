const express = require('express')
const path = require('path')
const router = require('./routes/Router_')
const bodyParser = require('body-parser');

var config = {
    user: "sa", // Database username
    password: "1234", // Database password
    server: "127.0.0.1", // Server IP address
    database: "FlexSim", // Database name
    options: {
      encrypt: false, // Disable encryption
    },
};

const app = express()

app.set('views',path.join(__dirname, 'views'))
app.set('view engine','ejs')
//app.use(express.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(router)
app.use(express.static(path.join(__dirname, 'public')))

app.listen(3000, ()=>{
    console.log('3000')
  })
