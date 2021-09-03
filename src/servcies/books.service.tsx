import makeRequest from "./makeRequest"
import urls from "../config/urls"

export async function getAllBooks(){
    return await makeRequest(urls.getAllBooks, 'get');
}

export async function getBookById(id: string){
    return await makeRequest(urls.getBookById + id, 'get');
}

