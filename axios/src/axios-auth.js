import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://learn-axios-e49c3.firebaseio.com/',
});

instance.defaults.headers.common['Something'] = 'Else';

export default instance;
