import axios from 'axios'
const API_URL = 'http://localhost:9000'

class AuthService{
    
    register(user) { // Funcion de registro
        return axios.post(API_URL + '/SignIn', user)
        .then(function (response) {
          console.log(user)
          console.log(response)
          
        })
        .catch(function (error) {
          console.log(error);
          console.log(user);
        })
    }
    
}
export default new AuthService()