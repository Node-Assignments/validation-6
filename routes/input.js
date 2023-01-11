const express = require('express');
const app = express()
const router = express.Router()
const path = require('path');

router.get('/input', (req, res, next) => {
    if (req.session.authenticated) {
        res.render('input', { valCorrect: true })
    }
})

module.exports = router