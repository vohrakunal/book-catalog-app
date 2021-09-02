import makeRequest from "./makeRequest"
import urls from "../config/urls"

export default async function getAllBooks(){
    return await makeRequest(urls.getAllBooks, 'get');
}