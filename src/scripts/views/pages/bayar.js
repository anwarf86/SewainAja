import UrlParser from '../../routes/url-parser';
import SewainAjaSources from '../../data/cardb-source';

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

const Bayar = {
  async render() {
    return `
<div class="container pt-3 pb-5">
	<ol class="alur-pesan">
		<li>1. Pilih Kendaraan  >  </li>
		<li class="onPage">2. Bayar  >  </li>
		<li>3. Konfirmasi Order  >  </li>
		<li>4. Selesai</li>
	</ol>
	<hr>

	<div id="bayarAja"></div>

</div>
		`;
  },
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const cars = await SewainAjaSources.bayarCar(url.id);
    const bayarContainer = document.querySelector('#bayarAja');
    	bayarContainer.innerHTML = bayarCarTemplate(cars);
  },
};

export default Bayar;
