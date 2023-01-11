const express = require('express')
const app = express()
const session = require('express-session')
var bodyParser = require('body-parser')
const port = 3000
const path = require('path');

app.set('view engine', 'ejs')
app.set('views', 'view')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());

app.use(session({
    secret: 'iamkey',
    resave: false,
    cookie: { maxAge: 30000 },
    saveUninitialized: false
}));
const root = require('./routes/root')
const show = require('./routes/show')
const input = require('./routes/input')

app.use(show)
app.use(input)
app.use(root)
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'view', 'nf.html'))
})




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})