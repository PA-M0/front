import axios from 'axios';

class Networking {
    // Make this a static property
    private static BASE_URL_ENDPOINT = "https://fakestoreapi.com";
  
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
            return response.data;
        } catch (error) {
            console.error('Error:', error);
        }
    }

    static async put(url: string, data: object) {
        try {
            const response = await axios.put(`${Networking.BASE_URL_ENDPOINT}${url}`, data);
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

    static async delete(url: string) {
        try {
            const response = await axios.delete(`${Networking.BASE_URL_ENDPOINT}${url}`);
            return response.data;
        } catch (error) {
            console.error('Error:', error);
        }
    }
}

export default Networking;
