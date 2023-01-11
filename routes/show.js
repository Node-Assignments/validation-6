const express = require('express');
const app = express()
const router = express.Router()
const { check, validationResult } = require('express-validator/check')
let arr = []
router.post('/show', check('formEmail').isEmail(), (req, res, next) => {
    if (req.session.authenticated) {
        if (validationResult(req).isEmpty()) {
            arr.push(req.body.formEmail)
            console.log("Arr: ", arr)
            res.render('show', { inputForm: arr, isAuth: req.session.authenticated })
        }
        else {
            res.render('input', { valCorrect: false })
        }
    }
})


module.exports = router