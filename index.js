require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/newroute', (req,res)=>{
    res.send("login dun is working")
})

app.get('/home', (req,res)=>{
    res.send("<h1> welcome to my website</h1>")
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})