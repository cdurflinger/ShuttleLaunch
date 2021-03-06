const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

//Get home page
router.get('/', (req, res, next) => {
    fetch('https://launchlibrary.net/1.2/launch/next/5')
    .then((res) => res.json())
    .then((data) => {
        const DATA_LAUNCHES = data.launches;
        res.render('index', {
            title: 'ShuttleLaunch',
            condition: false,
            data: DATA_LAUNCHES,
            style: 'main.css',
            script: 'main.js',
        });
    })
})

router.get('/news', (req, res, next) => {
    fetch('https://spaceflightnewsapi.net/api/v1/articles')
    .then((res) => res.json())
    .then((data) => {
        res.render('news', {
            title: 'ShuttleLaunch',
            condition: false,
            data: data.docs,
            style: 'news.css',
            script: 'news.js',
        });
    })
})

module.exports = router;