import axios from 'axios'

const BASE_URL = 'https://info-backend.fungilydev.com'

export const botoneraApiTalcahuano = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/botonera-talcahuano/`);
    console.log('response :', response);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
}

export const ordenanzaApiTalcahuano = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/ordenanza-talcahuano/`);
    console.log('response :', response);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
}


export const votacionApiTalcahuano = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/votacion-talcahuano/`);
    console.log('response :', response);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
}

