import Home from '../views/pages/home';
import CariKendaraan from '../views/pages/cari_kendaraan';
import Laporkan from '../views/pages/laporkan';
import Sewakan from '../views/pages/sewakan';
import Bayar from '../views/pages/bayar';
import KonfirmasiOrder from '../views/pages/konfirmasi_order';
import Selesai from '../views/pages/selesai_transaksi';
import Daftar from '../views/pages/daftar';
import Masuk from '../views/pages/masuk';
import FAQ from '../views/pages/faq';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/cari_kendaraan': CariKendaraan,
  '/cari_kendaraan/bayar': Bayar,
  '/bayar/konfirmasi_order': KonfirmasiOrder,
  '/konfirmasi_order/selesai_transaksi': Selesai,
  '/laporkan': Laporkan,
  '/sewakan': Sewakan,
  '/faq': FAQ,
  '/daftar': Daftar,
  '/masuk': Masuk,
};

export default routes;
