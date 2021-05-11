import axios from 'axios'
import api from './service-properties.json'

class LocalService{

    async getMaps() { // Petición GET. Obtener todas las publicaciones de la plataforma.
        var markers = []
        await axios.get(api.API_URL + "/get-posts").then((result) => {
            markers = result.data;
        })
        return markers;
    }

    async getMyRooms(){
        var my_rooms = []
        await axios.post(api.API_URL + '/get-my-posts', {"username": localStorage.getItem("user_email")}).then((result) => {
            my_rooms = result.data;
        });
        return my_rooms;
    }
    
}
export default new LocalService();