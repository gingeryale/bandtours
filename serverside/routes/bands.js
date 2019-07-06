var express = require('express');
var router = express.Router();
var myDbHelper = require('../helps/db'); 

var pool= myDbHelper.myPool;


// get all bands
router.get('/', async function (req, res, next) { 
  let result = await pool.query('SELECT * FROM showtimes.bands'); 
  res.json(result); 
}); 


// get single band
router.get('/:id', async function (req, res, next) { 
  let result = await pool.query(`SELECT * FROM showtimes.bands WHERE id=${req.params.id}`); 
  res.json(result); 
}); 


// POST add band
router.post('/', async function (req, res, next) { 
  let insertQuery= ` INSERT INTO showtimes.bands (bandID, bandname)
    VALUES ('${req.body.bandID}','${req.body.bandname}')
    `; 
    let result = await pool.query(insertQuery); 
    res.json(result); 
}); 

module.exports = router;
