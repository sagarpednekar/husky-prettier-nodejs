const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) =>{ console.log(res);  res.send({text:"Hello World"})})

app.listen(port, () => {console.log(`Example app listening on port ${port}!`)})