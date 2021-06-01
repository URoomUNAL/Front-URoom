import axios from 'axios'
import api from './service-properties.json'

class LocalService{

    GetPosts() {     // Solicitud de todas las publicaciones de la plataforma.
        return axios.get(api.API_URL + '/get-posts', {
            headers:{
                'Content-Type': 'application/json'
            }
        });
    }

    GetServices(){  // Solicitud de todos los servicios.
        return axios.get(api.API_URL + '/get-services', {
            headers:{
                'Content-Type': 'application/json'
            }
        });
    }

    GetContact(id){
        return axios.get(api.API_URL + '/contact-owner', {
                headers: {
                    'Content-Type': 'application/json'
                }
            }, {
                PostId: id 
            }
        );
    }

}
export default new LocalService();