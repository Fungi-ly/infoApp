import axios from 'axios'

const BASE_URL = 'https://info-backend.fungilydev.com'

export const botoneraApiCore = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/botonera/`);
    console.log('response :', response);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
}

export const botoneraApiCoreID = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/botonera/:id_btn`);
    console.log('response :', response);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
}

export const ordenanzaApiCore = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/ordenanza/`);
    console.log('response :', response);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
}


export const votacionApiCore = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/votacion/`);
    console.log('response :', response);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
}


