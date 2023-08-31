import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


const instance = axios.create({
    baseURL: 'https://7f99-178-251-45-178.ngrok-free.app' //ngrok http 3000 
});

instance.interceptors.request.use(
    async (config)=>{
        const token = await AsyncStorage.getItem('token');
        if(token){
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (err)=>{
        return Promise.reject(err);
    }
)

export default instance