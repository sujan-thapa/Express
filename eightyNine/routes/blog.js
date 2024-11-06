const express = require('express')
const router = express.Router()

// define the home page route

router.get('/', (req, res) => {
    res.send('Blog Home Page!')
})

// define the about route
router.get('/about', (req, res) => {
    res.send('About Birds!')
})


// define the about route
router.get('/blogpost/:slug', (req, res) => {
    res.send(`fetch the blogpost for ${req.params.slug}`) // this is to get the slug from the url
})

module.exports = router


