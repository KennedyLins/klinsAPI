const express = require('express'); //exporting module express
const router = express.Router(); //exporting method Router from express

/* To use a database connection you must uncomment the line below
and config the file in folder ./model/db.js: */

//const bd = require('../model/db');


//Creating routes
router.get('/', (req, res) => {
  //Here you must return a value of database or some other value.
  res.json({
    name: 'Home Route',
    value1: 'value 01/01',
    value2: 'value 01/02',
    value3: 'value 01/03'
  });
})

router.get('/first-route', (req, res) => {
  //Here you must return a value of database or some other value.
  res.json({
    name: 'First Route',
    value1: 'value 01/01',
    value2: 'value 01/02',
    value3: 'value 01/03'
  });
})

router.get('/second-route', (req, res) => {
  //Here you must return a value of database or some other value.
  res.json({
    name: 'Second Route',
    value1: 'value 02/01',
    value2: 'value 02/02',
    value3: 'value 02/03'
  });
})

//exporting module router to be used in another file
module.exports = router;