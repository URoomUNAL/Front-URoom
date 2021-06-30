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
    ModifyProfile(form){
        return axios.post(api.API_URL + '/update-info', form, {
            headers: {
            "Content-Type": "application/json"
        }});
    }
}
export default new UserService();