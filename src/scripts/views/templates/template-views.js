const createCarItemTemplate = (cars) => `
	<div class="card p-3 mb-2">
        <div class="d-flex item-hasil ">
            <div class="foto-kendaraan">
                <img src="${cars.foto_kendaraan}" alt="${cars.nama_kendaraan}">
            </div>
            <div class="konten-tengah">
                <h3>${cars.nama_kendaraan}</h3>
                <p class="pt-4"><i class="material-icons">directions_car</i> ${cars.transmisi}</p>
                <p><i class="material-icons">airline_seat_recline_normal</i> ${cars.penumpang} orang</p>
                <p><i class="material-icons">business_center</i> ${cars.barang} koper</p>
                <p><i class="material-icons">ac_unit</i> ${cars.isAC}</p>
            </div>
            <div class="konten-kanan">
                <p>Pemilik : ${cars.pemilik}</p>
                <p>Alamat : ${cars.lokasi}</p>
                <p><span class="harga-sewa">${cars.Biaya}</span> / hari</p>
                <p>${cars.posisi}</p>
                <a href="${`/#/bayar/${cars.id}`}" class="lanjutkan">Lanjutkan</a>
            </div>
        </div>
	</div>
`;

const SelectOption = (cars) => `
	<option value="">${cars.lokasi}</option>
`;

const bayarCarTemplate = (cars) => `
<div class="d-flex foto-bayar">
    <div class="foto-kendaraan">
        <img src="${cars.foto_kendaraan}" alt="${cars.nama_kendaraan}">
    </div>
    <div class="bayar-detail-kendaraan ml-4">
        <h3>${cars.nama_kendaraan}</h3>
        <h3>Pemilik : ${cars.pemilik}</h3>
        <p class="pt-2"><i class="material-icons">directions_car</i> ${cars.transmisi}</p>
        <p><i class="material-icons">airline_seat_recline_normal</i> ${cars.penumpang} Orang</p>
        <p><i class="material-icons">business_center</i> ${cars.barang} Koper</p>
        <p><i class="material-icons">ac_unit</i> ${cars.isAC}</p>
    </div>
    <div class="durasi-sewa ml-3">
        <label for="mulai_sewa"><h3>Mulai Sewa</h3></label><br>
        <input type="date" id="mulai_sewa" name="mulai_sewa" class="mb-2"><br>
        <label for="selesai_sewa"><h3>Selesai Sewa</h3></label><br>
        <input type="date" id="selesai_sewa" name="selesai_sewa">
    </div>
</div>
`;

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

export {
  createCarItemTemplate,
  SelectOption,
  bayarCarTemplate,
  sewakanItemTemplate,
  riwayatItemTemplate,
};
