const express = require('express')
const blog = require('./routes/blog')
// this is to import the shop route
const shop = require('./routes/shop') 



const app = express()
const port = 3000


// this is to serve the static files in the public folder
app.use(express.static("public")) 

// this is to use the middleware
app.use('/blog', blog)
app.use("/shop",shop)


app.get('/', (req, res) => {
    console.log("hey this is the get request")
    res.send('Hello Sujan!')
})
app.post('/', (req, res) => {
    console.log("hey this is the post request")

    res.send('Hello Sujan!, this is the post')
})


app.put('/', (req, res) => {
    console.log("hey this is the put request")

    res.send('Hello Sujan!, this is the put request')
})

app.get('/index', (req, res) => {
    console.log("hey this is the index request")
    // res.send('Hello Sujan!, this is the index page')
    res.sendFile("templates/index.html", {root: __dirname})
    // res.download("templates/index.html")
    // res.end() // this is to end the response
    // res.json({name: "Sujan", age: 23}) // this is to send json response
    // res.sendStatus(200) // this is to send status code // 200 is for ok
})


app.get('/api', (req, res) => {
    console.log("hey this is the index request")
    res.json({name: "Sujan", age: 23})
    // res.send('Hello Sujan!, this is the index page')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})