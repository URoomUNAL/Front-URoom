import axios from 'axios'

//const API_URL = 'https://uroom.azurewebsites.net'
const API_URL = 'http://localhost:9000'
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

    AddRoom(form){
      return axios.post(API_URL + '/add-post', form, {
        headers: {
            "Content-Type": "application/json"
        }});
    }

    LogOut(){
      
    }

    ModifyProfile(form){
      return axios.post(API_URL + '/update-info', form, {
        headers: {
          "Content-Type": "application/json"
      }});
    }
    
}
export default new AuthService();