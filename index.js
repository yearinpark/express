const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => res.send('Hello!'))

app.get('/test', (req, res) => res.send('Test'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.get('/redirect', function(req, res) {

    res.redirect('/');
});