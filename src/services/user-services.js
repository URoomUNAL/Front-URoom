import axios from 'axios'
import authHeader from './authentication-header.js'
import api from './service-properties.json'

class UserService{
    
    GetUser(){
        return axios.get(api.API_URL + '/get-user', {
            headers: 
                authHeader()
            }
        );
    }
    ModifyProfile(form){
        var formData = new FormData();
        formData.append('name', form.name);
        formData.append('email', form.email);
        formData.append('age', form.age);
        formData.append('cellphone', form.cellphone);
        formData.append('photo_file', form.photo);
        return axios.post(api.API_URL + '/update-info', formData, {
            headers: {
                "Content-Type": "application/json", ...authHeader()
            }
        });
    }
    RateRoom(form){
        console.log(form)
        return axios.post(api.API_URL + '/rate-post', form,  { 
            headers: 
                authHeader()
        })
    }
}
export default new UserService();