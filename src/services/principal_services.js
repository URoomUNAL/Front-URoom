import axios from 'axios'

const API_URL = 'http://localhost:8081'
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

    sign_in(form){
      return axios.post(API_URL + '/login', form, {
        headers: {
          "Content-Type": "application/json"
        }})
        .then(function(response){
            console.log(response);
            console.log(form)
        }).catch(function(error){
            console.log(error);
            console.log(form);
        });
    }
    
}
export default new AuthService();