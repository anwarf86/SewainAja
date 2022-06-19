import SewainAjaSources from '../../data/cardb-source';

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
            <li>Biaya sewa per hari : Rp<span class="detail-kendaraan-item">${sewakan.Biaya}</span>,-</li>
          </ul>
</div>
`;

const riwayatItemTemplate = (riwayat) => `
<table width="100%">
  <tr>
    <td width="25%">${riwayat.nama_penyewa}</td>
    <td width="25%x">${riwayat.mulai_sewa}</td>
    <td width="25%">${riwayat.selesai_sewa}</td>
    <td width="25%"">${riwayat.status}</td>
  </tr>          
</table>
`;

const Sewakan = {
  async render() {
    return `
    <div class="d-flex container sewakan pt-3 pb-5 justify-content-center">
    <div class="card kendaraan-anda p-3 mr-3">
      <h2>Kendaraan Anda</h2>
      <hr>
      <div class="d-flex kendaraan_anda_konten">
        
      </div>
      <div class="riwayat-sewa">
        <h3>Riwayat Sewa</h3>
        <table width="100%">
          <tr>
            <th width="25%">Nama Penyewa</th>
            <th width="25%">Mulai Sewa</th>
            <th width="25%">Selesai Sewa</th>
            <th width="25%">Status Sewa</th>
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
    const sewakanData = await SewainAjaSources.sewakan();
    const riwayatData = await SewainAjaSources.riwayat();
    const sewakanContainer = document.querySelector('.kendaraan_anda_konten');
    const riwayatContainer = document.querySelector('.isi_riwayat');
    sewakanData.forEach((sewakan) => {
      sewakanContainer.innerHTML += sewakanItemTemplate(sewakan);
    });
    riwayatData.forEach((riwayat) => {
      riwayatContainer.innerHTML += riwayatItemTemplate(riwayat);
    });
  },
};

export default Sewakan;
