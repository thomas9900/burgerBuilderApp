import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-eb422-default-rtdb.firebaseio.com/'
});

export default instance;