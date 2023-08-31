import createDataContext from "./createDataContext";
import trackerApi from '../api/tracker';

// trackReducer fonksiyonu, track verilerini yönetir
const trackReducer = (state, action) => {
  switch (action.type) {
    case 'fetch_tracks': 
      return action.payload;
    default:
      return state;
  }
};

// API'den izleme verilerini almayı sağlayan fonksiyon
const fetchTracks = dispatch => async () => {
  const response = await trackerApi.get('/tracks');
  dispatch({ type: 'fetch_tracks', payload: response.data });
};

// Yeni bir izleme oluşturmayı sağlayan fonksiyon
const createTrack = dispatch => async (name, locations) => {
  await trackerApi.post('/tracks', { name, locations });
};

// createDataContext ile state yönetimi sağlayan Context ve Provider oluşturuluyor
export const { Provider, Context } = createDataContext(
  trackReducer,
  { fetchTracks, createTrack },
  []
);
/*Bu kod bloğu, izleme verilerini yöneten bir Context ve ilgili eylemleri içerir. trackReducer adlı reducer fonksiyonu, izleme verilerinin state içinde nasıl güncelleneceğini belirler. Ayrıca, fetchTracks ve createTrack gibi fonksiyonlar, ilgili eylemleri dispatch etmek için kullanılır. Bu fonksiyonlar, createDataContext ile oluşturulan Context ve Provider ile kullanılır. Başlangıç değeri, izleme verilerinin boş bir diziyi temsil etmektedir.*/
