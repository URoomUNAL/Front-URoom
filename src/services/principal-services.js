import axios from 'axios'

const API_URL = 'https://uroom.azurewebsites.net'

class AuthService{
    
    register(user) { // Funcion de registro
      return axios.post(API_URL + '/sign-up', user,{
        headers:{
            "Content-Type": "application/json"
        }});
    }

    LogIn(form){
      return axios.post(API_URL + '/log-in', form, {
        headers: {
            "Content-Type": "application/json"
        }});
    }
    
}
export default new AuthService();