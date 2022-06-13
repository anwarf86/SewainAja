const Laporkan = {
  async render() {
    return `
    <div class="container pt-3 pb-5">
    <h1 class="text-center">Laporkan</h1>
    <p class="text-center laporkan-caption">Sampaikan saran dan keluhan Anda disini !</p>
    <div class="d-flex laporkan mt-5">
      <div class="laporkan-content mr-5">
        <form>
          <div class="form-group">
            <label for="nama_pelapor">Masukkan Nama Anda :</label>
            <input type="text" class="form-control" id="nama_pelapor">
          </div>
          <div class="form-group">
            <label for="email_pelapor">Masukkan Email Anda :</label>
            <input type="email" class="form-control" id="email_pelapor">
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group">
            <label for="isi_laporan">Masukkan laporan Anda :</label>
            <textarea class="form-control" id="isi_laporan" rows="3"></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
      <div class="laporkan-contact">
        <div class="card alamat p-3">
          <h3>Alamat</h3>
          <p>Jl. Rajawali No.41 , Kecamatan Pancoran, Kota Jakarta Selatan. Provinsi DKI Jakarta, Indonesia. 12520.</p>
        </div>
        <div class="card email p-3 mt-4">
          <h3>Email</h3>
          <p>sewainaja.support@gmail.com</p>
        </div>
        <div class="card telepon p-3 mt-4">
          <h3>Telepon</h3>
          <p>+62 858-9449-5047</p>
        </div>
      </div>
    </div>
  </div>
    `;
  },
};

export default Laporkan;
