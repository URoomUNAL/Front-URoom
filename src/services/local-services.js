import axios from 'axios'

// const API_URL = 'http://localhost:9000';
const API_URL = 'https://uroom.azurewebsites.net';

class LocalService{

    async getMaps() { // Petición GET. Obtener todas las publicaciones de la plataforma.
        var markers = []
        await axios.get(API_URL + "/get-posts").then((result) => {
            markers = result.data;
        })
        return markers;
    }

    async getMyRooms(){
        var my_rooms = []
        await axios.post(API_URL + '/get-my-posts', {"username": localStorage.getItem("user_email")}).then((result) => {
            my_rooms = result.data;
        });
        return my_rooms;
    }
    
}
export default new LocalService();