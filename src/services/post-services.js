import axios from 'axios'
import authHeader from './authentication-header.js'
import api from './service-properties.json'

class PostService{

    AddRoom(form){  // Ingresar un nuevo post en el sistema.
        var formData = new FormData();
        formData.append('title', form.title);
        formData.append('description', form.description);
        formData.append('address', form.address);
        formData.append('price', form.price);
        formData.append('latitude', form.latitude);
        formData.append('longitude', form.longitude);
        formData.append('main_img', form.main_img);
        form.images.forEach(element => {
            formData.append('images', element);
        });
        form.services.forEach(element => {
            formData.append('services', element);
        });
        form.rules.forEach(element => {
            formData.append('rules', element);
        });
        return axios.post(api.API_URL + '/add-post', formData, {
            headers: 
                authHeader()
            }
        );
    }
  
    GetMyPosts(){
        return axios.get(api.API_URL + '/get-my-posts', {
            headers: 
                authHeader()
            }
        );
    }

    ActivateDeactivateRoom(id){
      return axios.post(api.API_URL + '/change-active', {flag:true}, {
            headers:
                authHeader(),
            params: {id: id}
            }
      );
    }

    GetFavorites(){
        console.log(authHeader())
        return axios.get(api.API_URL + '/get-favorites', {
            headers: 
                authHeader()
            }
        );
    }

    
    GetContact(id){
        return axios.get(api.API_URL + '/contact-owner', {
                headers: {
                    'Content-Type': 'application/json'
                    , ...authHeader()
                },
                params: {
                    PostId: id
                }
            }
        );
    }
    
    async FilterPost(form){ 
        console.log(form)     
         var markers = []
         await  axios.post(api.API_URL + '/get-posts-filtered', form).then((result) => {
             markers = result.data;
         })
         return markers;
    }
    
    async getPost(id) { 
       var post = []
       await axios.get(api.API_URL + "/get-post", { params: { id: id } }).then((result) => {
           post = result.data;
       })
       return post;
    }

    addFavorites(id){
        return axios.post(api.API_URL + '/add-favorite', {flag:true}, { 
                params: { id: id },
                headers: 
                    authHeader()
            }
        );
    }
    
    removeFavorite(id){
      console.log(authHeader(), id);
        return axios.post(api.API_URL + '/remove-favorite', {flag:true}, { 
                params: { id: id },
                headers: 
                    authHeader()
            }
        );
    }

    CreateQuestion(form){
        return axios.post(api.API_URL + '/create-question', form, {
            params: {id: form.id},
            headers:
                authHeader()
        });
    }

    RespondQuestion(form){
        return axios.post(api.API_URL + '/respond-question', form, {
            params: {id: form.id},
            headers:
                authHeader()
        });
    }

}
export default new PostService();