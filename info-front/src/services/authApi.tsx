import axios from 'axios';

const BASE_URL = 'https://info-backend.fungilydev.com';

export const loginApi = async (username: string, password: string) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/login`, {
      username,
      password,
    });
    console.log('response:', response);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
};


export const registerApi = async (username: string, password: string, role: string, rut: string, institucion: string, mail: string) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/register`, {
      username,
      password,
      role,
      rut,
      institucion,
      mail
    });
    console.log('response:', response);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
};

