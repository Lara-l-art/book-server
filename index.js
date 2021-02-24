const express = require('express')
const app = express()
const PORT = process.env.PORT || 8000
const arr = [];
const cors = require('cors')

app.use(cors())

app.get('/', (req, res) => {
  res.end(JSON.stringify(arr))
})

app.post('/', (req, res) => {
  req.on('data', (data) => {
    arr.push(JSON.parse(data));
  }).on('end', () => {
    res.end(JSON.stringify(arr));
  })
}).listen(PORT, () => console.log(`Listening on ${PORT}`))
