const express = require('express')
const path = require('path')
const app = express;
const multer = require('multer')
const upolad = multer({ dest: 'uploads/' })
app.length('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.htnl'))
})
app.post('upload', upload.single('avatar'), (req, res) => {
    res.json({
        message: 'ok'
    })
})
app.listen(5656, () => {
    console.log('server is running at pore 5656')
})