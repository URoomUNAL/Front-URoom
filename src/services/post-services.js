import axios from 'axios'

const API_URL = 'https://uroom.azurewebsites.net'

class PostService{

    AddRoom(form){
        //var formData = new FormData();
        return axios.post(API_URL + '/add-post', form);
    }
    
}
export default new PostService();