import SewainAjaSources from '../../data/cardb-source';

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

const CariKendaraan = {
  async render() {
    return `
      <div class="container pt-3 pb-5">
				<ol class="alur-pesan">
					<li class="onPage">1. Pilih Kendaraan  >  </li>
					<li>2. Bayar  >  </li>
					<li>3. Konfirmasi Order  >  </li>
					<li>4. Selesai</li>
				</ol>
				<hr>

				<div class="card p-4 mb-5 mx-auto cari_kendaraan shadow">
					<form action="">
						<div class="custom-control custom-radio custom-control-inline">
							<input type="radio" id="motor" name="jenis_kendaraan" class="custom-control-input">
							<label class="custom-control-label" for="motor"><h3>Motor</h3></label>
						</div>
						<div class="custom-control custom-radio custom-control-inline">
							<input type="radio" id="mobil" name="jenis_kendaraan" class="custom-control-input">
							<label class="custom-control-label" for="mobil"><h3>Mobil</h3></label>
						</div>
						
						<hr>

						<h3>Lokasi Rental</h3>
						<div class="input-group mb-3 wilayah">
							<div class="input-group-prepend">
								<label class="input-group-text" for="pilihWilayah"><i class="material-icons">room</i></label>
							</div>
							<select class="custom-select" id="pilihWilayah">
								<option selected>Choose...</option>
								
							</select>
						</div>

						<label for="mulai_sewa"><h3>Mulai Sewa</h3></label><br>
  					<input type="date" id="mulai_sewa" name="mulai_sewa" class="mb-2"><br>
						<label for="selesai_sewa"><h3>Selesai Sewa</h3></label><br>
  					<input type="date" id="selesai_sewa" name="selesai_sewa">
						<input type="submit" value="Cari Kendaraan" class="submit">
					</form>
				</div>

				<div class="d-flex justify-content-between filter-hasil">
					<div class="card filter p-3">
						<h3><i class="material-icons">filter_list</i> Filter</h3>
						<form>
							<div class="form-group">
								<h3>Harga</h3> <hr>
								<input type="radio" id="semua_harga" name="harga" value="Semua_harga">
								<label for="semua_harga">Semua</label><br>
								<input type="radio" id="termurah" name="harga" value="Termurah">
								<label for="termurah">Termurah</label><br>
								<input type="radio" id="termahal" name="harga" value="Termahal">
								<label for="termahal">Termahal</label>
							</div>
							<div class="form-group">
								<h3>Kapasitas Penumpang</h3> <hr>
								<input type="radio" id="semua_kapasitas_penumpang" name="penumpang" value="Semua_kapasitas_penumpang">
								<label for="semua_kapasitas_penumpang">Semua</label><br>
								<input type="radio" id="penumpang_4" name="penumpang" value="penumpang_4">
								<label for="penumpang_4">4 penumpang</label><br>
								<input type="radio" id="lebih_dari_4" name="penumpang" value="lebih_dari_4">
								<label for="lebih_dari_4">> 4 penumpang</label>
							</div>
							<div class="form-group">
								<h3>Transmisi</h3> <hr>
								<input type="radio" id="semua_transmisi" name="transmisi" value="Semua_transmisi">
								<label for="semua_transmisi">Semua</label><br>
								<input type="radio" id="manual" name="transmisi" value="manual">
								<label for="manual">Manual</label><br>
								<input type="radio" id="otomatis" name="transmisi" value="otomatis">
								<label for="otomatis">Otomatis</label>
							</div>
							<div class="btn-group" role="group" aria-label="Basic example">
								<button type="submit" class="btn btn-primary">Terapkan</button>
								<button type="reset" class="btn btn-secondary reset">Reset</button>
							</div>
						</form>
					</div>
					<div class="hasil_pencarian p-2">
						<div class="list-hasil" id="carsData">
							
						</div>
					</div>
				</div>
			</div>
      `;
  },

  async afterRender() {
    const list = await SewainAjaSources.cars();
    const vechileContainer = document.querySelector('#carsData');
    const option = document.querySelector('#pilihWilayah');
    list.forEach((cars) => {
      vechileContainer.innerHTML += createCarItemTemplate(cars);
	  option.innerHTML += SelectOption(cars);
    });
  },
};

export default CariKendaraan;
