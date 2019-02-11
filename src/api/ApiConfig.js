export const API_CONFIG = {
  baseUrl: !process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? 'http://localhost:8080/api' : 'https://totallyNotLocalhost/api'
}