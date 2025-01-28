import axios from 'axios'

const BASE_URL = 'https://info-backend.fungilydev.com'

export const botoneraApiDemo = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/botonera-demo/`);
    console.log('response :', response);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
}

export const ordenanzaApiDemo = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/ordenanza-demo/`);
    console.log('response :', response);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
}


export const votacionApiDemo = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/votacion-demo/`);
    console.log('response :', response);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
}



