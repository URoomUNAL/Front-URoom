import axios from 'axios'

const API_URL = 'https://uroom.azurewebsites.net'
//const API_URL = 'http://localhost:9000/'

class LocalService{

    async getMaps() { // Petición GET. Obtener todas las publicaciones de la plataforma.
        var markers = []
        await axios.get(API_URL + "/get-posts").then((result) => {
            markers = result.data;
        })
        return markers;
      }
    
}
export default new LocalService();