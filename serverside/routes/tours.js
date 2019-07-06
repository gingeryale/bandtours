var express = require('express');
var router = express.Router();
var myDbHelper = require('../helps/db'); 

var pool= myDbHelper.myPool;


// get all tours
router.get('/', async function (req, res, next) { 
  let result = await pool.query('SELECT * FROM showtimes.tours'); 
  res.json(result); 
}); 


// get single tour
router.get('/:id', async function (req, res, next) { 
  let result = await pool.query(`SELECT * FROM showtimes.tours WHERE id=${req.params.id}`); 
  res.json(result); 
}); 


// POST add band
router.post('/', async function (req, res, next) { 
  let insertQuery= ` INSERT INTO showtimes.tours  (bandID, bandname, city, price, map, dateTime)
    VALUES (${req.body.bandID}, '${req.body.bandname}','${req.body.city}',${req.body.price},'${req.body.map}',${req.body.dateTime})
    `; 
    let result = await pool.query(insertQuery); 
    res.json(result); 
}); 

// router.get('/city/:cityid', async (req,res,next)=>{
// let q = `SELECT showtimes.tours.bandID, showtimes.bands.bandname,showtimes.bands.bandID, showtimes.tours.city, showtimes.tours.dateTime FROM 
// showtimes.bands INNER JOIN showtimes.tours ON 
// showtimes.tours.city='${req.params.cityid}' && showtimes.tours.bandID=bands.bandID ;`;
// let result = await pool.query(q);
// res.json(result);
// })

router.get('/city/:cityid', async (req,res,next)=>{
  res.json( await pool.query( `SELECT showtimes.tours.bandID, showtimes.bands.bandname,showtimes.bands.bandID, showtimes.tours.city, showtimes.tours.dateTime FROM 
  showtimes.bands INNER JOIN showtimes.tours ON 
  showtimes.tours.city='${req.params.cityid}' && showtimes.tours.bandID=bands.bandID ;`)
  )});

module.exports = router;
