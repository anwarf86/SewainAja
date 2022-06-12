const mysql = require('mysql');

const dbLaporan = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'daftar_login'
});

exports.dbLaporan = dbLaporan;