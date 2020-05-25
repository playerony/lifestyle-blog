const path = require('path')
const express = require('express')

const app = express()

app.use(express.static(path.join(__dirname, './dist')))
app.set('port', process.env.PORT || 8080)

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './dist/index.html'))
})

app.listen(app.get('port'))
