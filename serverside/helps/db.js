var mysql = require('promise-mysql');


var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    connectionLimit: 10
});

 
var myDbHelper = { 
    createDBAndTables: function () {
        pool.query(`CREATE DATABASE IF NOT EXISTS showtimes`).then(data => {
            console.log(data);
            let createToursTable = `
                CREATE TABLE IF NOT EXISTS showtimes.tours (id INT AUTO_INCREMENT PRIMARY KEY, 
                bandID INT(255), bandname VARCHAR(255), city VARCHAR (255), price INT (255), map VARCHAR (255), dateTime BIGINT (255))  
             `;
            pool.query(createToursTable).then(data => {
                console.log(data);
            });
            let createBands = `CREATE TABLE IF NOT EXISTS showtimes.bands (id INT AUTO_INCREMENT PRIMARY KEY, 
                bandID INT (255), bandname VARCHAR (255))`;
            pool.query(createBands).then(data => {
                console.log(data);
            });
        }); 
    }, 
    myPool: pool
}
 





module.exports = myDbHelper;
























