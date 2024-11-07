const express = require('express')
const app = express()
const port = 3000
const fs = require('fs') // fs is a core module of nodejs


app.use(express.static('public')) 

// Middleware 1   -- for eg logger for our application
app.use((req, res, next) => {
    console.log(req.headers)
    req.sujan = "I am Sujan Thapa"; // we can add any property to the req object
    // fs.writeFileSync('log.txt', `${Date.now()} is a ${req.method}`);
    fs.appendFileSync('log.txt', `${Date.now()} is a ${req.method} \n`);

    console.log("m1");
    next(); // next() is used to call the next middleware
})


// Middleware 2
app.use((req, res, next) => {
    console.log("m2");
    // res.send("Hello from Middleware 2"); // res.send() is used to send response to the client and it will not call the next middleware
    next(); // next() is used to call the next middleware
})


app.get('/', (req, res) => {
  res.send('Hello Sujan!')
})


app.get('/about', (req, res) => {
    // req.sujan is the property that we added in the middleware 1
    res.send('Hello about!' + req.sujan) 
  })


  app.get('/contact', (req, res) => {
    res.send('Hello contact!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})