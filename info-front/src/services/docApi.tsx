import axios from 'axios'

const BASE_URL = 'https://info-backend.fungilydev.com'


export const DocListApi = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/doc/list/`);
      return response.data;
    } catch (error) {
      console.error('Error:', error);
      return [];
    }
  }


  export const DocListApiFolder = async (folderName:string): Promise<any[]> => {
    try {
      const response = await axios.get<any[]>(`${BASE_URL}/doc/cloud-files/${folderName}`);
      return response.data;
    } catch (error) {
      console.error('Error:', error);
      return [];
    }
  };


