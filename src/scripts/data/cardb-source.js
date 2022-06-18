import API_ENDPOINT from '../globals/api-endpoint';

class SewainAjaSources {
  static async cars() {
    const response = await fetch(API_ENDPOINT.LISTCAR);
    const responseJson = await response.json();
    return responseJson;
  }

  static async bayarCar(id) {
    const response = await fetch(API_ENDPOINT.BAYAR(id));
    return response.json();
  }

  static async sewakan() {
    const response = await fetch(API_ENDPOINT.SEWAKAN);
    const responseJson = await response.json();
    return responseJson;
  }

  static async riwayat() {
    const response = await fetch(API_ENDPOINT.RIWAYAT);
    const responseJson = await response.json();
    return responseJson;
  }
}

export default SewainAjaSources;
