import axios from 'axios'

//const  API_URL = 'https://uroom.azurewebsites.net';
const  API_URL = 'http://localhost:9000';

class PostService{

    AddRoom(form){                                      // Peticion POST. Enviar la información de un nuevo post.
      var formData = new FormData();
      formData.append("title", form.title);
      formData.append("description", form.description);
      formData.append("address", form.address);
      formData.append("price", form.price);
      formData.append("latitude", form.latitude);
      formData.append("longitude", form.longitude);
      formData.append("main_img", form.main_img);
      form.images.forEach(element => {
        formData.append("images", element);
      });
      form.services.forEach(element => {
        formData.append("services", element);
      });
      form.rules.forEach(element => {
        formData.append("rules", element);
      });
      formData.append("user", localStorage.getItem("user_email"));
      console.log(formData);
      return axios.post(API_URL + '/add-post', formData);
    }
  
    ActivateDeactivateRoom(room){
      return axios.post(API_URL + '/change-active', room);
    }
    async GetServices(){                                // Petición GET. obtener la lista de posibles servicios.
      var services = []
      await axios.get(API_URL + '/get-services')
      .then(function(response){
        services = response.data;
      }).catch(function(error){
          console.log(error);
      });
      return services;
    }

    async GetRules(){                                   // Petición GET. obtener la lista de posibles normas.
      var rules = []
      await axios.get(API_URL + '/get-rules')
      .then(function(response){
          rules = response.data;
      }).catch(function(error){
          console.log(error);
      });
      return rules;
    }
    
    async FilterPost(form){      
        var markers = []
        await  axios.post(API_URL + '/get-posts-filtered', form).then((result) => {
            markers = result.data;
        })
        return markers;
    }
    
}
export default new PostService();