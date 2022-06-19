const express = require('express');
const router = express.Router();

const users_fb1 = require('../modules/model')


router.post('/', async (req, res) => {
    const body = req.body
    try {
        const userDB = new users_fb1(body)
        await userDB.save()
        res.redirect('/views')
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;