const mysql = require('mysql2');

const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    database:'database-management',
    password:'Mahakal@00'
});

module.exports = pool.promise()