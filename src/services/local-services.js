import axios from 'axios'
import api from './service-properties.json'
import authHeader from './authentication-header.js'

class LocalService{

    GetPosts() {     // Solicitud de todas las publicaciones de la plataforma.
        return axios.get(api.API_URL + '/get-posts', {
            headers:{
                'Content-Type': 'application/json',
                ...authHeader()
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

    GetRules(){  // Solicitud de todos los servicios.
        return axios.get(api.API_URL + '/get-rules', {
            headers:{
                'Content-Type': 'application/json'
            }
        });
    }
}
export default new LocalService();