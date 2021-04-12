import axios from 'axios'

axios.defaults.headers.common['Authorization'] = 'Bearer' + localStorage.getItem('data');

class LocalService{

    
}
export default new LocalService();