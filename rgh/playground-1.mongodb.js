
use('sigmaDatabase');

// Insert a few documents into the sales collection.
db.getCollection('courses').insertMany([
  [
    {
      "_id": { "$oid": "672dac20f93a2bfaf3cfce71" },
      "name": "Next JS",
      "price": "20000"
    },
    {
      "_id": { "$oid": "672dac20f93a2bfaf3cfce72" },
      "name": "React",
      "price": "15000"
    },
    {
      "_id": { "$oid": "672dac20f93a2bfaf3cfce73" },
      "name": "Vue",
      "price": "18000"
    },
    {
      "_id": { "$oid": "672dac20f93a2bfaf3cfce74" },
      "name": "Angular",
      "price": "21000"
    },
    {
      "_id": { "$oid": "672dac20f93a2bfaf3cfce75" },
      "name": "Svelte",
      "price": "16000"
    },
    {
      "_id": { "$oid": "672dac20f93a2bfaf3cfce76" },
      "name": "Express",
      "price": "17000"
    },
    {
      "_id": { "$oid": "672dac20f93a2bfaf3cfce77" },
      "name": "Node.js",
      "price": "22000"
    },
    {
      "_id": { "$oid": "672dac20f93a2bfaf3cfce78" },
      "name": "Django",
      "price": "23000"
    },
    {
      "_id": { "$oid": "672dac20f93a2bfaf3cfce79" },
      "name": "Flask",
      "price": "14000"
    },
    {
      "_id": { "$oid": "672dac20f93a2bfaf3cfce7a" },
      "name": "Laravel",
      "price": "19000"
    }
  ]
  
]);

// Print a message to the output window.
console.log('10 documents were inserted into the courses collection!');