const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const loginUser = express();
const { dbLogin } = require('./model/dbLogin');

loginUser.use(cors());
loginUser.use(express.json());
loginUser.use(bodyParser.urlencoded({ extended: true }));

// read
loginUser.get('/login/readUser', (req, res) => {
    const sqlQuery = "SELECT * FROM user";
  
    dbLogin.query(sqlQuery, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
        console.log(result);
      }
    });
  });

  loginUser.get('/login/readUser/:user_email/:user_password', (req, res) => {
    const userEmail = req.params.user_email;
    const userPassword = req.body.user_password;
  
    const sqlQuery = "SELECT * FROM user WHERE user_email = ?";
    dbLogin.query(sqlQuery, [userEmail, userPassword], (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
        console.log(result);
      }
    });
  });
  // #####

// create
loginUser.post('/login/createUser', (req, res) => {
    const userName = req.body.user_name;
    const userEmail = req.body.user_email;
    const userPassword = req.body.user_password;
  
    const sqlQuery = "INSERT INTO user (user_name, user_email, user_password) VALUE (?, ?, ?)";
    dbLogin.query(sqlQuery, [userName, userEmail, userPassword], (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
        console.log(result);
      }
    });
  });
  // #####  

  // delete
loginUser.delete('/login/deleteUser', (req, res) => {
  const userId = req.body.user_id;

  const sqlQuery = "DELETE FROM user WHERE user_id = ?";
  dbLogin.query(sqlQuery, userId, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log(result);
    }
  });
});
// #####

  loginUser.listen(8080, () => {
    console.log('server berhasil berjalan pada port 8080!');
  });