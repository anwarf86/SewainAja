const mysql = require('mysql');

const dbLogin = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'daftar_login'
});

exports.dbLogin = dbLogin;