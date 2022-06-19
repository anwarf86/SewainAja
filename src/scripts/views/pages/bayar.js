import UrlParser from '../../routes/url-parser';
import SewainAjaSources from '../../data/cardb-source';
import { bayarCarTemplate } from '../templates/template-views';

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
