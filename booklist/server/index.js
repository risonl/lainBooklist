var express = require('express')
var app = express()
const port = 8001

//get method
app.get('/', function (req, res){
    res.send("GET displayed")
    console.log('successful get')
})
//post method
app.post('/', function (req, res){
    res.send('POST saved')
    console.log('successful post')
})

app.listen(port, () => {
    console.log('App listening at localhost:8001')
})