// axios ve AsyncStorage kütüphanelerini projeye dahil ediyoruz
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Axios instance oluşturuluyor ve baseURL belirleniyor
const instance = axios.create({
    baseURL: 'https://7f99-178-251-45-178.ngrok-free.app' //ngrok http 3000 
});

// Axios interceptor'ı kullanılarak istekler öncesi işlemler yapılıyor
instance.interceptors.request.use(
    async (config) => {
        // Async Storage'dan token alınıyor
        const token = await AsyncStorage.getItem('token');
        
        // Eğer token varsa, istek başlığına Authorization header ekleniyor
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
);

// Hazırlanan Axios instance dışa aktarılıyor
export default instance;


// Axios instance, API isteklerini yönetmek ve kimlik doğrulama bilgisini otomatik olarak eklemek için kullanılır.
// API sunucusunun adresi 'baseURL' olarak belirtilir.
// İstekler öncesinde, Async Storage'dan alınan token istek başlığına eklenir.
// Bu dosya, React Native projelerinde API isteklerini kolaylaştırmak amacıyla kullanılır.
