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
  const sqlQuery = "SELECT * FROM transaksi";

  db.query(sqlQuery, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log(result);
    }
  });
});

app.get("/api/readTransaksi/:id_trans", (req, res) => {
  const P_idtrans = req.params.id_trans;

  const sqlQuery = "SELECT * FROM transaksi WHERE id_trans = ?";
  db.query(sqlQuery, P_idtrans, (err, result) => {
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
app.post("/api/createTransaksi", (req, res) => {
  const P_idtrans = req.body.id_trans;
  const P_waktuTrans = req.body.waktu_trans;
  const P_namaPembayar = req.body.nama_pembayar;
  const P_namaBank = req.body.nama_bank;
  const P_bukti_transfer = req.body.bukti_transfer;

  const sqlQuery = "INSERT INTO transaksi (id_trans,waktu_trans,nama_pembayar,nama_bank,bukti_transfer) VALUE (?, ?, ?, ?, ?)";
  db.query(sqlQuery, [
    P_idtrans, 
    P_waktuTrans, 
    P_namaPembayar,
    P_namaBank,
    P_bukti_transfer], (err, result) => {
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
app.put("/api/updateTransaksi", (req, res) => {
  const P_idtrans = req.body.id_trans;
  const P_waktuTrans = req.body.waktu_trans;
  const P_namaPembayar = req.body.nama_pembayar;
  const P_namaBank = req.body.nama_bank;
  const P_bukti_transfer = req.body.bukti_transfer;

  const sqlQuery = "UPDATE transaksi SET waktu_trans = ?, nama_pembayar = ?, nama_bank = ?, bukti_transfer = ? WHERE id_trans = ?";
  db.query(sqlQuery, [ 
    P_waktuTrans, 
    P_namaPembayar,
    P_namaBank,
    P_bukti_transfer,
    P_idtrans], (err, result) => {
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
app.delete("/api/deleteTransaksi", (req, res) => {
  const P_idtrans = req.body.id_pemilik;

  const sqlQuery = "DELETE FROM transaksi WHERE id_trans = ?";
  db.query(sqlQuery, P_idtrans, (err, result) => {
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
