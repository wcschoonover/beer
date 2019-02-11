import axios from 'axios';
import { API_CONFIG } from './ApiConfig';

class Api {
  getHeaders() {
    const accessToken = localStorage.getItem('access_token');
    return { 'Authorization': `Bearer ${accessToken}` };
  }

  apiGet(endpoint) {
    const headers = this.getHeaders();
    return axios.get(API_CONFIG.baseUrl + endpoint, { headers });
  }

  apiPost(endpoint, content) {
    const headers = this.getHeaders();
    return axios.post(API_CONFIG.baseUrl + endpoint, content, { headers });
  }

  apiPut(endpoint, content) {
    const headers = this.getHeaders();
    return axios.put(API_CONFIG.baseUrl + endpoint, content, { headers });
  }

  apiDelete(endpoint) {
    const headers = this.getHeaders();
    return axios.delete(API_CONFIG.baseUrl + endpoint, { headers });
  }
}
export default Api;