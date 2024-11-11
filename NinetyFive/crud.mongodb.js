use("CrudDb");

// console.log("db: ", db); // db:  CrudDb

db.createCollection("courses");

// db.courses.insertOne({
//     name: "Node.js",
//     price: 100,
// })

// db.courses.insertMany([
//     {
//         "name": "Node.js",
//         "price": 100
//     },
//     {
//         "name": "Node.js",
//         "price": 100
//     },
//     {
//         "name": "Node.js",
//         "price": 100
//     },
//     {
//         "name": "Node.js",
//         "price": 100
//     },
//     {
//         "name": "Node.js",
//         "price": 100
//     },
//     {
//         "name": "Node.js",
//         "price": 100
//     },
//     {
//         "name": "Node.js",
//         "price": 100
//     },
//     {
//         "name": "Node.js",
//         "price": 100
//     },
//     {
//         "name": "Node.js",
//         "price": 100
//     },
//     {
//         "name": "Node.js",
//         "price": 100
//     }
// ]
// )

// db.courses.find({name: "Node.js"})
// db.courses.updateMany({price: 100}, {$set: {price: 2000}})
// db.courses.insertOne({
//     name: "Next Js",
//     price: 200,
// })


db.courses.deleteOne({name: "Next Js"}) // deletes the first object that matches the query.
// let a = db.courses.find({name: "Node.js"});
// let a = db.courses.findOne({name: "Node.js"}); // returns the first object that matches the query.

// console.log(a)
// toArray() is used to convert the cursor object into an array of objects.
// console.log(a.toArray()) 


// console.log(a.count()) // 11


