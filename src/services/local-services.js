import axios from 'axios'
const API_URL = 'https://uroom.azurewebsites.net'
axios.defaults.headers.common['Authorization'] = 'Bearer' + localStorage.getItem('data');

class LocalService{
    async getMaps() { // Funcion de registro
        var markers = []
        await axios.get(API_URL + "/get-posts").then((result) => {
            markers = result.data;
        })
        return markers;
      }
    
}
export default new LocalService();