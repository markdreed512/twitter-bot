const express = require('express')

let app = express()

let PORT = 3000

app.listen(PORT, function(){
    console.log(`listening on port ${PORT}`)
})

app.get('/', function(req, res){
    res.send("HELLO World!!")
})