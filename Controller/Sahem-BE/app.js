const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    console.log('new req');
    let a = {
        b:'22',
        c:'223'
    }
    res.send(a);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))