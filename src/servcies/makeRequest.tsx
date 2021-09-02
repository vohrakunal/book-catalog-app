import axios from 'axios';
import environment from '../config/environment';

export default async function makeRequest(url: string, method: string, inputPayload?: any){

    let requestConfig :any = {
        baseURL: environment.api.baseUrl,
        url: url,
        method: method,
    };

    if (method !== 'get' && inputPayload) {
        requestConfig.data = inputPayload;
    }

    try {
        let response = await axios.request(requestConfig);
        return response;
    } catch (error) {
        throw error;
    }
}
