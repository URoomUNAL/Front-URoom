import axios from 'axios'
import api from './service-properties.json'

class AuthService{
    
    SignUp(user) { // Funcion de registro
      return axios.post(api.API_URL + '/sign-up', user, {
        headers:{
            'Content-Type': 'application/json'
        }});
    }

    LogIn(form){
      return axios.post(api.API_URL + '/log-in', form, {
        headers: {
            'Content-Type': 'application/json'
        }});
    }

    AddRoom(form){
      return axios.post(api.API_URL + '/add-post', form, {
        headers: {
            'Content-Type': 'application/json'
        }});
    }
    
}
export default new AuthService();