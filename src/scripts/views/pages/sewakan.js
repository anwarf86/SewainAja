import data from '../../data/sewakan.json';

const sewakanItemTemplate = (sewakan) => `
<div class="foto-kendaraan">
          <img src="${sewakan.foto_kendaraan}" alt="">
        </div>
        <div class="detail-kendaraan ml-4">
          <h3>${sewakan.nama_kendaraan}</h3>
          <ul>
            <li>Transmisi : <span class="detail-kendaraan-item">${sewakan.transmisi}</span></li>
            <li>Kapasitas Penumpang : <span class="detail-kendaraan-item">${sewakan.penumpang}</span> orang</li>
            <li>Kapasitas Barang : <span class="detail-kendaraan-item">${sewakan.barang} </span>koper</li>
            <li>Nomor WA : <span class="detail-kendaraan-item">${sewakan.no_wa}</span></li>
            <li>Lokasi : <span class="detail-kendaraan-item">${sewakan.lokasi}</span></li>
            <li>Biaya sewa per hari : Rp<span class="detail-kendaraan-item">${sewakan.BiayaPerHAri}</span>,-</li>
          </ul>
</div>
`;
const riwayatItemTemplate = (Riwayat) => `
<table>
  <tr>
    <td>${Riwayat.nama_penyewa}</td>
    <td>${Riwayat.mulai_sewa}</td>
    <td>${Riwayat.selesai_sewa}</td>
    <td>${Riwayat.status}</td>
  </tr>          
</table>
`;
/*
 */
const Sewakan = {
  async render() {
    return `
    <div class="d-flex container sewakan pt-3 pb-5 justify-content-center">
    <div class="card kendaraan-anda p-3 mr-3">
      <h2>Kendaraan Anda</h2>
      <hr>
      <div class="d-flex kendaraan-anda-konten">
        
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
        </table>
      </div>
      <div class="isi_riwayat">
        <table>

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

  async afterRender() {
    const sewakanData = await data.sewakan;
    const riwayatData = await data.Riwayat;
    const vechileContainer = document.querySelector('.kendaraan-anda-konten');
    const riwayatContainer = document.querySelector('.isi_riwayat');
    sewakanData.forEach((sewakan) => {
      vechileContainer.innerHTML += sewakanItemTemplate(sewakan);
    });
    riwayatData.forEach((Riwayat) => {
      riwayatContainer.innerHTML += riwayatItemTemplate(Riwayat);
    });
  },
};

export default Sewakan;
