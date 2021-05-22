
const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(bodyParser.urlencoded({extended:false}))

app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','application/json');
    res.send({
        status:"success",
        name:"tarık keskin",
        sms:"this is root path for Realm Nodejs project"
    })
})
module.exports ={
    app
}