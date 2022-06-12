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
  const sqlQuery = "SELECT * FROM pemilik";

  db.query(sqlQuery, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log(result);
    }
  });
});

app.get("/api/readPemulik/:id_pemilik", (req, res) => {
  const P_nama = req.params.id_pemilik;

  const sqlQuery = "SELECT * FROM pemilik WHERE id_pemilik = ?";
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
app.post("/api/createPemilik", (req, res) => {
  const P_idPemilik = req.body.id_pemilik;
  const P_nama = req.body.nama;
  const P_email = req.body.email;
  const P_password = req.body.password;
  const P_foto_stnk = req.body.foto_stnk;
  const P_no_wa = req.body.no_wa;
  const P_lokasi = req.body.lokasi;
  const P_alamat = req.body.alamat;
  const P_posisi = req.body.posisi;
  const P_namaKendaraan = req.body.nama_kendaraan;
  const P_fotoKendaraan = req.body.foto_kendaraan;
  const P_penumpang = req.body.penumpang;
  const P_barang = req.body.barang;
  const P_transmisi = req.body.transmisi;
  const P_biayaSewaHari = req.body.biaya_sewa_hari;
  const P_status = req.body.status;

  const sqlQuery = "INSERT INTO penyewa (id_pemilik,nama,email,password,foto_stnk,no_wa,status,lokasi,alamat,nama_kendaraan,foto_kendaraan,penumpang,barang,transmisi,biaya_sewa_hari) VALUE (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
  db.query(sqlQuery, [
    P_idPemilik, 
    P_nama, 
    P_email,
    P_password,
    P_foto_stnk,
    P_no_wa,
    P_lokasi,
    P_alamat,
    P_posisi,
    P_namaKendaraan,
    P_fotoKendaraan,
    P_penumpang,
    P_barang,
    P_transmisi,
    P_biayaSewaHari,
    P_status], (err, result) => {
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
app.put("/api/updatePemilik", (req, res) => {
  const P_nama = req.body.nama;
  const P_password = req.body.password;
  const P_foto_stnk = req.body.foto_stnk;
  const P_no_wa = req.body.no_wa;
  const P_lokasi = req.body.lokasi;
  const P_alamat = req.body.alamat;
  const P_posisi = req.body.posisi;
  const P_namaKendaraan = req.body.nama_kendaraan;
  const P_fotoKendaraan = req.body.foto_kendaraan;
  const P_penumpang = req.body.penumpang;
  const P_barang = req.body.barang;
  const P_transmisi = req.body.transmisi;
  const P_biayaSewaHari = req.body.biaya_sewa_hari;
  const P_status = req.body.status;
  const P_email = req.body.email;

  const sqlQuery = "UPDATE pemilik SET nama = ?, password = ?, foto_stnk = ?, no_wa = ?, lokasi = ?, alamat = ?, posisi = ?, nama_kendaraan = ?, foto_kendaraan = ?, penumpang = ?, barang = ?, transmisi = ?, biaya_sewa_hari = ?, status = ? WHERE email = ?";
  db.query(sqlQuery, [
    P_nama, 
    P_password,
    P_foto_stnk,
    P_no_wa,
    P_lokasi,
    P_alamat,
    P_posisi,
    P_namaKendaraan,
    P_fotoKendaraan,
    P_penumpang,
    P_barang,
    P_transmisi,
    P_biayaSewaHari,
    P_status,
    P_email,], (err, result) => {
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
app.delete("/api/deletePemilik", (req, res) => {
  const P_idPemilik = req.body.id_pemilik;

  const sqlQuery = "DELETE FROM pemilik WHERE id_pemilik = ?";
  db.query(sqlQuery, P_idPemilik, (err, result) => {
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
