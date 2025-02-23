import axios from 'axios';

class Networking {
    private static BASE_URL_ENDPOINT = "https://16.170.157.105:5006";
  
    static async get(url: string) {
        try {
            
            const response = await axios.get(`${Networking.BASE_URL_ENDPOINT}${url}`);
            return response.data;
        } catch (error) {
            console.error('Error:', error);
        }
    }

    static async post(url: string, data: object) {
        try {
            const response = await axios.post(`${Networking.BASE_URL_ENDPOINT}${url}`, data);
            return response.status;
        } catch (error) {
            console.error('Error:', error);
        }
    }

    static async put(url: string, data: object, id: number) {
        try {
            
            const response = await axios.put(`${Networking.BASE_URL_ENDPOINT}${url}${id}`, data);
            return response.data;
        } catch (error) {
            console.error('Error:', error);
        }
    }

    static async patch(url: string, data: object) {
        try {
            const response = await axios.patch(`${Networking.BASE_URL_ENDPOINT}${url}`, data);
            return response.data;
        } catch (error) {
            console.error('Error:', error);
        }
    }

    static async delete(url: string, id: object | number) {
        try {
            
            const response = await axios.delete(`${Networking.BASE_URL_ENDPOINT}${url}${id}`);
            return response.data;
        } catch (error) {
            console.error('Error:', error);
        }
    }
}

export default Networking;
