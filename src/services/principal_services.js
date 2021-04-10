import axios from 'axios'
const API_URL = 'http://localhost:9000'
class AuthService{
    
    register(user) { // Funcion de registro
        return axios.post('API_URL' + '/SignIn', user)
        .then(function (response) {
          console.log(myForm)
          console.log(response)
          
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    
}
export default new AuthService()