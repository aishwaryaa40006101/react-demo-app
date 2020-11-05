import axios from 'axios';

const message_api_base_url="http://localhost:9010/";

class MessageService{

    createMessage(message){
        return axios.post(message_api_base_url,message);
    }
    getMessages(){
        return axios.get(message_api_base_url+'getMessage');
    }

    deleteMessage(id) {
        //console.log('executed service')
        return axios.delete(`${message_api_base_url}/deleteMessage/${id}`);
    }
}

export default new MessageService();