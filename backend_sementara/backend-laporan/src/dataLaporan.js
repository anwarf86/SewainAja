const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const laporanUser = express();
const { dbLaporan } = require('./model/dbLaporan');

laporanUser.use(cors());
laporanUser.use(express.json());
laporanUser.use(bodyParser.urlencoded({ extended: true }));

// read
laporanUser.get('/laporan/readLaporan', (req, res) => {
    const sqlQuery = "SELECT * FROM laporan";
  
    dbLaporan.query(sqlQuery, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
        console.log(result);
      }
    });
  });

  laporanUser.get('/laporan/readLaporan/:nama_pelapor', (req, res) => {
    const namaPelapor = req.params.nama_lapor;
  
    const sqlQuery = "SELECT * FROM laporan WHERE nama_pelapor = ?";
    dbLaporan.query(sqlQuery, namaPelapor , (err, result) => {
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
laporanUser.post('/laporan/createLaporan', (req, res) => {
    const namaPelapor = req.body.nama_lapor;
    const tglLapor = req.body.tgl_lapor;
    const isiLaporan = req.body.isi_laporan;
  
    const sqlQuery = "INSERT INTO laporan (nama_lapor, tgl_lapor, isi_laporan) VALUE (?, ?, ?)";
    dbLaporan.query(sqlQuery, [namaPelapor, tglLapor, isiLaporan], (err, result) => {
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
laporanUser.delete('/laporan/deleteLaporan', (req, res) => {
  const laporanId = req.body.id_lapor;

  const sqlQuery = "DELETE FROM laporan WHERE id_lapor = ?";
  dbLaporan.query(sqlQuery, laporanId, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log(result);
    }
  });
});
// #####

  laporanUser.listen(8080, () => {
    console.log('server berhasil berjalan pada port 8080!');
  });