const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

//Get home page
router.get('/', (req, res, next) => {
    fetch('https://launchlibrary.net/1.2/launch/next/5')
    .then((res) => res.json())
    .then((data) => {
        const DATA_LAUNCHES = data.launches;
        res.render('index', {title: 'ShuttleLaunch', condition: false, data: DATA_LAUNCHES});
    })
})

module.exports = router;