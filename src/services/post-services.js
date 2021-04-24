import axios from 'axios'

const API_URL = 'https://uroom.azurewebsites.net'

class PostService{

    AddRoom(form){
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
      return axios.post(API_URL + '/add-post', formData);
    }

    async GetServices(){
      var services = []
      await axios.get(API_URL + '/get-services')
      .then(function(response){
        services = response.data;
      }).catch(function(error){
          console.log(error);
      });
      return services;
    }

    async GetRules(){
      var rules = []
      await axios.get(API_URL + '/get-rules')
      .then(function(response){
          rules = response.data;
      }).catch(function(error){
          console.log(error);
      });
      return rules;
    }
    
}
export default new PostService();