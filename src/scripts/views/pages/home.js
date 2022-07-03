const Home = {
  async render() {
    return `
    <div class="content">
    <div class="hero">
      <div class="container d-flex pt-5 pb-5">
        <div class="hero-content pt-2" style="width:50%">
          <h1>Punya Kendaraan <br>
            Tapi Gak Dipakai ?
          </h1>
          <h1>Pengen Pergi <br>
            Tapi Gak Punya Kendaraan ?
          </h1>
          <p class="pt-4" style="width:70%">SewainAja membantu mempertemukan pemilik kendaraan yang ingin menyewakan kendaraannya dengan orang yang sedang mencari kendaraan sewa.</p>
          <a href="#/daftar">
            <button class="btn btn-custom mt-5">Daftar Sekarang</button>
          </a>
        </div>
        <div class="hero-image">
          <picture>
            <source type="image/webp" srcset="hero_image.webp">
            <source type="image/jpeg" srcset="hero_image.png">

            <img src="hero_image.png" alt="">
          </picture>
        </div>
      </div>
    </div>

    <div class="why pb-5">
      <h1 class="text-center pt-5 pb-4">Mengapa harus Sewain Aja ?</h1>
      <div class="container d-flex justify-content-around">
        <div class="why-item text-center">
          <div class="why-image">
            <picture>
              <source type="image/webp" srcset="why_image_1.webp">
              <source type="image/jpeg" srcset="why_image_1.png">
              <a href="https://www.freepik.com/free-vector/car-service-abstract-concept-illustration_11667633.htm#query=service%20car%20abstrack&position=13&from_view=search">
                <img src="why_image_1.png" alt="">
              </a>
            </picture>
          </div>
          <div class="why-content mx-auto" style="width: 80%;">
            <h2>Service Berkualitas Dari Partner Terpercaya</h2>
            <p>Partner rental kendaraan SewainAja memastikan kendaraan yang akan Anda sewa berkualitas dan nyaman digunakan sepanjang perjalanan.</p>
          </div>
        </div>
        <div class="why-item text-center">
          <div class="why-image">
            <picture>
              <source type="image/webp" srcset="why_image_2.webp">
              <source type="image/jpeg" srcset="why_image_2.png">
              <a href="https://www.freepik.com/free-vector/man-with-map-smartphone-renting-car-driver-using-car-sharing-app-phone-searching-vehicle-vector-illustration-transport-transportation-urban-traffic-location-app-concept_10613210.htm#query=rent%20car&position=16&from_view=search">
                <img src="why_image_2.png" alt="">
              </a>
            </picture>
          </div>
          <div class="why-content mx-auto" style="width: 80%;">
            <h2>Rating Pengguna Asli</h2>
            <p>Rating dari user lain akan membantu Anda untuk menemukan pilihan sewa kendaraan yang paling tepat.</p>
          </div>
        </div>
        <div class="why-item text-center">
          <div class="why-image">
            <picture>
              <source type="image/webp" srcset="why_image_3.webp">
              <source type="image/jpeg" srcset="why_image_3.png">
              <a href="https://www.freepik.com/free-vector/flat-feedback-concept-illustrated_13718569.htm#query=flat%20feedback%20illustration&position=3&from_view=search">
                <img src="why_image_3.png" alt="">
              </a>
            </picture>
          </div>
          <div class="why-content mx-auto pt-4" style="width: 80%;">
            <h2>Mudah & Praktis</h2>
            <p>Buka browser Anda dan temukan dengan mudah kendaraan yang Anda cari. Pesan kapan saja dan dimana saja.</p>
          </div>
        </div>
      </div>
      <div class="container text-center">
        <a href="#/daftar">
          <button class="btn btn-custom mt-4">Daftar Sekarang</button>
        </a>
      </div>
    </div>

    <div class="rules">
      <h1 class="text-center pt-4">Ketentuan Sewa - Menyewa Kendaraan</h1>
      <div class="container d-flex pt-4 pb-5">
        <div class="card syarat mr-5">
          <div class="syarat-title text-center p-1">
            <h2>Syarat pemilik kendaraan</h2>
          </div>
          <div class="syarat-content p-3">
            <ul>
              <li>Memastikan kendaraan yang akan disewakan memiliki kondisi yang prima.</li>
              <li>Tahun produksi kendaraan harus diatas tahun 2013.</li>
              <li>Menyertakan dokumen seperti STNK dan pajak masih hidup.</li>
              <li>Menyertakan nomor WA agar bisa dihubungi penyewa kendaraan.</li>
            </ul>
          </div>
        </div>
        <div class="card syarat">
          <div class="syarat-title text-center p-1">
            <h2>Syarat penyewa kendaraan</h2>
          </div>
          <div class="syarat-content p-3">
            <ul>
              <li>Memiliki SIM dan KTP</li>
              <li>Bersedia menyerahkan KTP kepada pemilik kendaraan sebagai jaminan</li>
              <li>Bersedia membayar ganti rugi jika terjadi kerusakan pada kendaraan</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
    `;
  },
};

export default Home;
