import axios from 'axios'
import api from './service-properties.json'

class AuthService{
    
    SignUp(form) { // Registro de usuario en la plataforma.
      var formData = new FormData();
      formData.append('name', form.name + ' ' + form.surname);
      formData.append('email', form.email);
      formData.append('photo_file', form.photo);
      formData.append('password', form.password);
      formData.append('cellphone', form.cellphone);
      formData.append('age', form.age);
      formData.append('is_student', form.is_student);
      
      return axios.post(api.API_URL + '/sign-up', formData, {
        });
    }

    LogIn(form){  // Inicio de sesión de usuario en la plataforma.
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