const express = require('express')
const app = express()
const mongoose = require('mongoose');
const Employee = require('./models/Employee.js')

mongoose.connect('mongodb://127.0.0.1:27017/company');

const port = 3000

// set ejs as the view engine
app.set('view engine', 'ejs')

const getRandom = (arr) =>{
    let arrLength = arr.length -1 
    console.log(arrLength)
    let randomm = Math.floor(Math.random() * arrLength);
    return arr[randomm];
}

app.get('/', (req, res) => {
    // res.send('Hello World!')
    res.render('index', {title: 'hello world'});
    //   res.renderFile('view enginer', index)
})

app.get('/generate', async(req, res) => {
    // Generate random data

    await Employee.deleteMany({})

    let randomNames = ['sujan','swastika','thapa']
    let randomCity = ['tanahun', 'pokhara','kathmandu']
    let randomLanguage = ['python','java','js']


    for (let index = 0; index < 10; index++) {
        // const element = array[index];
        let e = await Employee.create({
            name: getRandom(randomNames),
            salary: Math.floor(Math.random() * 80000),
            language: getRandom(randomLanguage),
            city: getRandom(randomCity)
        })
        console.log(e)
        
    }

    // res.render('index', {title: 'hello world'});
    //   res.renderFile('view enginer', index)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})