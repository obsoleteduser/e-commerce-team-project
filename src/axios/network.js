import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://fakestoreapi.com/',
    // timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});
  


export const network = {

  getProducts: async (url) =>{
   return await instance.get(url)
  }
  
}
