import CONFIG from './config';

const API_ENDPOINT = {

  LISTCAR: `${CONFIG.BASE_URL}users`,
  BAYAR: (id) => `${CONFIG.BASE_URL}users/${id}`,
  SEWAKAN: `${CONFIG.BASE_URL}sewakan`,
  RIWAYAT: `${CONFIG.BASE_URL}riwayat`,
};

export default API_ENDPOINT;
