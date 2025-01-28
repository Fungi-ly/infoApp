import axios from 'axios'

const BASE_URL = 'https://info-backend.fungilydev.com';

export const botoneraApiPostgres = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/botonera-postgres/`);
    console.log('response :', response);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
}


export const votacionApiPostgres = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/votacion-postgres/`);
    console.log('response :', response);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
}

export const ordenanzaApiPostgres = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/ordenanza-postgres/`);
    console.log('response :', response);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
}



