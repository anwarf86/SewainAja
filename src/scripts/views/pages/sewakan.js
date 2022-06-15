const Sewakan = {
  async render() {
    return `
    <div class="d-flex container sewakan pt-3 pb-5 justify-content-center">
    <div class="card kendaraan-anda p-3 mr-3">
      <h2>Kendaraan Anda</h2>
      <hr>
      <div class="d-flex kendaraan-anda-konten">
        <div class="foto-kendaraan">
          <img src="mobil_1.png" alt="">
        </div>
        <div class="detail-kendaraan ml-4">
          <h3>Toyota Agya</h3>
          <ul>
            <li>Transmisi : <span class="detail-kendaraan-item">Manual</span></li>
            <li>Kapasitas Penumpang : <span class="detail-kendaraan-item">4</span> orang</li>
            <li>Kapasitas Barang : <span class="detail-kendaraan-item">2 </span>koper</li>
            <li>Nomor WA : <span class="detail-kendaraan-item">085894495047</span></li>
            <li>Lokasi : <span class="detail-kendaraan-item">Jakarta Selatan</span></li>
            <li>Biaya sewa per hari : Rp<span class="detail-kendaraan-item">350.000</span>,-</li>
          </ul>
        </div>
      </div>
      <div class="riwayat-sewa">
        <h3>Riwayat Sewa</h3>
        <table>
          <tr>
            <th>Nama Penyewa</th>
            <th>Mulai Sewa</th>
            <th>Selesai Sewa</th>
            <th>Status Sewa</th>
          </tr>
          <tr>
            <td>Bambang Setyo</td>
            <td>15 Juni 2022</td>
            <td>17 Juni 2022</td>
            <td class="berlangsung">Sedang berlangsung</td>
          </tr>
          <tr>
            <td>Rafi Setyawan</td>
            <td>1 Juni 2022</td>
            <td>2 Juni 2022</td>
            <td class="selesai-sewa">Selesai</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="card tambahkan-kendaraan p-3">
      <h2>Tambahkan Kendaraan</h2>
      <hr>
      <form action="">
        <div class="form-group">
          <label for="tipe-kendaraan">Tipe Kendaraan :</label>
          <input type="text" class="form-control" id="tipe-kendaraan">
        </div>
        <div class="form-group">
          <label for="transmisi">Transmisi :</label>
          <input type="text" class="form-control" id="transmisi">
        </div>
        <div class="form-group">
          <label for="lokasi">Lokasi :</label>
          <input type="text" class="form-control" id="lokasi">
        </div>
        <div class="form-group">
          <label for="kapasitas-penumpang">Kapasitas Penumpang :</label>
          <input type="text" class="form-control" id="kapasitas-penumpang">
        </div>
        <div class="form-group">
          <label for="kapasitas-barang">Kapasitas Barang :</label>
          <input type="text" class="form-control" id="kapasitas-barang">
        </div>
        <div class="form-group">
          <label for="harga-sewa-per-hari">Harga sewa per hari :</label>
          <input type="text" class="form-control" id="harga-sewa-per-hari">
        </div>
        <div class="form-group">
          <label for="foto-kendaraan">Upload foto kendaraan Anda </label>
          <input type="file" class="form-control-file" id="foto-kendaraan">
        </div>
        <div class="form-group">
          <label for="foto-STNK">Upload foto STNK Anda </label>
          <input type="file" class="form-control-file" id="foto-STNK">
        </div>
        <button type="submit" class="btn btn-primary" style="width: 100%">Submit</button>
      </form>
    </div>
  </div>
    `;
  },
};

export default Sewakan;
