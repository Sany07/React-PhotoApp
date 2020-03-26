import axios from 'axios';




export default axios.create({

    baseURL : 'https://api.unsplash.com',
    headers:{
        Authorization: 'Your Api' 

    }
});