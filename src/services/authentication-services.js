import axios from 'axios'
import authHeader from '../services/authentication-header.js'

const API_URL = 'https://uroom.azurewebsites.net'

class AuthService{
    
    SignUp(user) { // Funcion de registro
      return axios.post(API_URL + '/sign-up', user,{
        headers:{
            'Content-Type': 'application/json'
        }});
    }

    LogIn(form){
      return axios.post(API_URL + '/log-in', form, {
        headers: {
            'Content-Type': 'application/json'
        }});
    }

    AddRoom(form){
      return axios.post(API_URL + '/add-post', form, {
        headers: {
            'Content-Type': 'application/json'
        }});
    }

    LogOut(){
      return axios.delete(API_URL + '/log-out', {
        headers: authHeader()
      });
    }
    
}
export default new AuthService();