import axios from 'axios'

const API_URL = 'http://localhost:9000'
class AuthService{
    
    register(user) { // Funcion de registro
        return axios.post('API_URL' + '/login', user)
        .then(function (response) {
          console.log(response)
          
        })
        .catch(function (error) {
          console.log(error);
        })
    }

    LogIn(form){
      return axios.post(API_URL + '/login', form, {
        headers: {
            "Content-Type": "application/json"
        }});
    }
    
}
export default new AuthService();