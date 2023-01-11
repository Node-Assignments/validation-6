const express = require('express');
const app = express()
const router = express.Router()
const path = require('path');

router.get('/', (req, res, next) => {
    res.render('root', { wrongPass: false })
})

router.post('/', (req, res) => {
    if (req.body.formUser == 'u' && req.body.formPassword == 'p') {
        req.session.authenticated = true;
        req.session.User = {
            name: req.body.formUser,
            password: req.body.formPassword
        }
        console.log("Session: ", req.session);
        res.redirect("/input")
    } else {
        res.render('root', { wrongPass: true })
    }
})

module.exports = router
