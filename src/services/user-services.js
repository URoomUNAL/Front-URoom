import axios from 'axios'
import authHeader from './authentication-header.js'
import api from './service-properties.json'

class UserService{
    
    GetUser(){
        return axios.get(api.API_URL + '/get-user', {
            headers: 
                authHeader()
            }
        );
    }
    
}
export default new UserService();