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
<div class="d-flex bayar-content">
        <div class="card detail-terms p-3">

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
          <div class="kebijakan">
                <h3 class="pb-2">Kebijakan</h3>
                <div class="syarat-rental">
                  <p class="title-item">Syarat Rental</p>
                  <ul>
                    <li>KTP / Paspor, SIM A / SIM Internasional, Deposit 500.000, bukti pekerjaan</li>
                    <li>Kembalikan bensin seperti semula</li>
                    <li>Penggunaan hingga 24 jam per hari sewa</li>
                    <li>Bisa Refund</li>
                    <li>Bisa Reschedule</li>
                  </ul>
          </div>
          <div class="sebelum-pengambilan">
                <p class="title-item">Sebelum Pengambilan</p>
                <ol>
                  <li>Penyewa harus membagikan kepada pemilik foto KTP/paspor mereka.</li>
                  <li>Penyewa harus membagikan kepada pemilik foto SIM A atau SIM Internasional mereka.</li>
                  <li>Penyewa harus membagikan kepada pemilik foto bukti pekerjaan mereka, seperti NPWP, kartu identitas perusahaan, atau surat keterangan kerja.</li>
                  <li>Penyewa harus membayar deposit sebesar Rp 500.000 melalui uang tunai atau  transfer sebesar kepada pemilik sebelum rental dimulai.</li>
                  <li>Semua permintaan khusus tergantung dari ketersediaan pemilik kendaraan dan dapat dikenakan biaya tambahan.</li>
                  <li>Penyewa harus memenuhi syarat paling lambat 12 jam sebelum pengambilan. Jika tidak, pesanan tidak bisa di-refund jika pengemudi tidak dapat memenuhi syarat.</li>
                </ol>
          </div>
        </div>
    </div>
    <div class="card ringkasan-sewa shadow p-3 ml-4">
          <div class="d-flex foto-bayar">
              <div class="foto-kendaraan">
                <img src="${cars.foto_kendaraan}" alt="">
              </div>
              <div class="bayar-detail-kendaraan ml-3">
                <h3>${cars.nama_kendaraan}</h3>
                <p class=""> ${cars.transmisi}</p>
              </div>
          </div>
          <ul>
              <li>${cars.lokasi}</li>
              <li>Sab, 28 Juni 2022 - Sen, 30 Juni 2022</li>
          </ul>
          <p>ID Transaksi : <span class="id_transaksi">123456789</span></p>
          <p class="title-harga-total">Harga Total</p>
          <p class="harga">Rp ${cars.Biaya},-</p>
          <a href="#/bayar/#/konfirmasi_order" class="bayar text-center">Bayar</a>
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
