const Masuk = {
  async render() {
    return `
    <div class="container pt-3 pb-5">
    <div class="card shadow masuk mx-auto p-3">
      <h3 class="text-center">MASUK AKUN</h3>
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
        <button type="submit" class="btn btn-custom" style="width: 100%">Masuk</button>
      </form>
    </div>
  </div>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Masuk;
