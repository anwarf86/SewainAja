const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const { db } = require("./model/dbConnection");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// read
app.get("/api/readData", (req, res) => {
  const sqlQuery = "SELECT * FROM penyewa";

  db.query(sqlQuery, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log(result);
    }
  });
});

app.get("/api/readPenyewa/:id_penyewa", (req, res) => {
  const P_nama = req.params.id_penyewa;

  const sqlQuery = "SELECT * FROM penyewa WHERE id_penyewa = ?";
  db.query(sqlQuery, P_nama, (err, result) => {
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
app.post("/api/createPenyewa", (req, res) => {
  const P_idPenyewa = req.body.id_penyewa;
  const P_nama = req.body.nama;
  const P_email = req.body.email;
  const P_password = req.body.password;
  const P_foto_sim = req.body.foto_sim;
  const P_no_wa = req.body.no_wa;
  const P_status = req.body.status;

  const sqlQuery = "INSERT INTO penyewa (id_penyewa,nama,email,password,foto_sim,no_wa,status) VALUE (?, ?, ?, ?, ?, ?, ?)";
  db.query(sqlQuery, [P_idPenyewa, P_nama, P_email,P_password,P_foto_sim,P_no_wa,P_status], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log(result);
    }
  });
});
// #####

// update
app.put("/api/updatePenyewa", (req, res) => {
  const P_nama = req.body.nama;
  const P_email = req.body.email;
  const P_password = req.body.password;
  const P_foto_sim = req.body.foto_sim;
  const P_no_wa = req.body.no_wa;
  const P_status = req.body.status;

  const sqlQuery = "UPDATE penyewa SET nama = ?, password = ?, foto_sim = ?, no_wa = ?, status = ? WHERE , email = ?";
  db.query(sqlQuery, [P_nama, P_email,P_password,P_foto_sim,P_no_wa,P_status, P_email], (err, result) => {
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
app.delete("/api/deletePenyewa", (req, res) => {
  const P_idPenyewa = req.body.id_penyewa;

  const sqlQuery = "DELETE FROM penyewa WHERE id_penyewa = ?";
  db.query(sqlQuery, P_idPenyewa, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log(result);
    }
  });
});
// #####

app.listen(8080, () => {
  console.log("server berhasil berjalan pada port 8080");
});
