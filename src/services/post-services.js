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
        return axios.post(api.API_URL + '/add-question', form, {
            params: {id: form.post_id},
            headers:
                authHeader()
        });
    }

    RespondQuestion(form){
        return axios.post(api.API_URL + '/update-answer', form, {
            params: {id: form.id},
            headers:
                authHeader()
        });
        // id pregunta
        // string respuesta.
    }

    RemoveQuestion(id){
        return axios.post(api.API_URL + '/remove-question',{
            params: {id: id},
            headers:
                authHeader()
        });
    }

    EditQuestion(id, form){
        return axios.post(api.API_URL + '/update-question', form, {
            params: {id: id},
            headers:
                authHeader()
        });
        // id pregunta.
        // anonimo
        // nuevo string
    }

    RentRoom(post_id, student_id){
        return axios.post(api.API_URL + '/rent-post', {} ,{ 
            params: {
                post_id: post_id,
                student_id: student_id
            },
            headers:
                authHeader()
        });
    }

    UnrentRoom(post_id){
        return axios.post(api.API_URL + '/unrent-post',{ 
            params: {
                post_id: post_id
            },
            headers:
                authHeader()
        });
    }

    GetInterestedInPost(post_id){
        return axios.get(api.API_URL + '/get-interested-users', {
            params: {
                post_id: post_id
            },
            headers:
                authHeader()
        });
    }

    GetRatePosts(){
        return axios.get(api.API_URL + '/get-rated', {
            headers: 
                authHeader()
            }
        );
    }

    AnswerQuestion(form){
        return axios.post(api.API_URL + '/update-answer', form, {
            params: {
                questionId: form.questionId,
                answer: form.answer
            },
            headers:
                authHeader()
        });
    }
}
export default new PostService();