import axios from 'axios'

const API_URL = 'http://localhost:9000'

class AuthService{
    
    register(user) { // Funcion de registro
      return axios.post(API_URL + '/sign-up', user,{
        headers:{
            "Content-Type": "application/json"
        }});
    }

    LogIn(form){
      return axios.post(API_URL + '/login', form, {
        headers: {
            "Content-Type": "application/json"
        }});
    }
    
}
export default new AuthService();