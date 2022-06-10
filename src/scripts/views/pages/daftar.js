const Daftar = {
  async render() {
    return `
    <div class="container pt-3 pb-5">
    <div class="card shadow daftar mx-auto p-3">
      <h3 class="text-center">DAFTAR AKUN</h3>
      <hr>
      <form>
        <div class="form-group">
          <label for="nama_pelapor">Masukkan Nama Anda :</label>
          <input type="text" class="form-control" id="nama_pelapor">
        </div>
        <div class="form-group">
          <label for="email_pelapor">Masukkan Email Anda :</label>
          <input type="email" class="form-control" id="email_pelapor">
        </div>
        <div class="form-group">
          <label for="Password">Password :</label>
          <input type="password" class="form-control" id="Password">
        </div>
        <div class="form-group">
          <label for="Konfirmasi_Password">Konfirmasi Password :</label>
          <input type="password" class="form-control" id="Konfirmasi_Password">
        </div>
        <div class="form-group">
          <label for="role">Daftar sebagai apa ?</label>
          <select class="custom-select" name="role">
            <option selected>Silahkan pilih ...</option>
            <option value="1">Penyewa</option>
            <option value="2">Pemilik</option>
          </select>
        </div>
        <button type="submit" class="btn btn-custom" style="width: 100%">Daftar</button>
      </form>
    </div>
  </div>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Daftar;
