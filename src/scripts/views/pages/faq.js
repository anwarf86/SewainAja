const FAQ = {
  async render() {
    return `
    <div class="container pt-3 pb-5">
      <h1 class="text-center">Frequently Asked Questions (FAQ)</h1>
      <div class="faq-list mx-auto pt-3">
        <div class="card faq-item">
          <p class="question">Apa itu SewainAja ?</p>
          <p class="answer">SewainAja adalah website yang membantu mempertemukan pemilik kendaraan dan penyewa yang ingin menyewa kendaraan pribadi</p>
        </div>
        <div class="card faq-item">
          <p class="question">Apa saja syarat yang harus dipenuhi jika ingin menyewa kendaraan ?</p>
          <p class="answer">Penyewa harus memiliki SIM A / SIM Internasional, bersedia membayar deposit dan menitipkan KTP sebagai jaminan.</p>
        </div>
        <div class="card faq-item">
          <p class="question">Bagaimana jika ada kendala pada website atau kasus penipuan penyewaan kendaraan ?</p>
          <p class="answer">Silahkan gunakan fitur "Laporkan" atau hubungi kontak kami yang tertera.</p>
        </div>
      </div>
    </div>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default FAQ;
