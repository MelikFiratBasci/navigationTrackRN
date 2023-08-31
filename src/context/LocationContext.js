import createDataContext from "./createDataContext";

// Konum verilerini yöneten reducer fonksiyonu
const locationReducer = (state, action) => {
  switch (action.type) {
    case "add_current_location":
      return { ...state, currentLocation: action.payload };
    case "start_recording":
      return { ...state, recording: true };
    case "stop_recording":
      return { ...state, recording: false };
    case "add_location":
      return { ...state, locations: [...state.locations, action.payload] };
    case "change_name":
      return { ...state, name: action.payload };
    case "reset":
      return { ...state, name: '', locations: [] };
    default:
      return state;
  }
};

// State'i sıfırlamak için kullanılan fonksiyon
const reset = (dispatch) => () => {
  dispatch({ type: 'reset' });
};

// İsim değişikliğini yöneten fonksiyon
const changeName = (dispatch) => (name) => {
  dispatch({ type: "change_name", payload: name });
};

// Kayıt başlatma işlemini yöneten fonksiyon
const startRecording = (dispatch) => () => {
  dispatch({ type: "start_recording" });
};

// Kayıt durdurma işlemini yöneten fonksiyon
const stopRecording = (dispatch) => () => {
  dispatch({ type: "stop_recording" });
};

// Konum ekleme işlemini yöneten fonksiyon
const addLocation = (dispatch) => (location, recording) => {
  dispatch({ type: "add_current_location", payload: location });
  if (recording) {
    dispatch({ type: "add_location", payload: location });
  }
};

// createDataContext ile state yönetimi sağlayan Context ve Provider oluşturuluyor
export const { Context, Provider } = createDataContext(
  locationReducer,
  { startRecording, stopRecording, addLocation, changeName, reset },
  { name: "", recording: false, locations: [], currentLocation: null }
);
/*
Bu kod bloğu, konum verilerini yöneten bir Context ve ilgili eylemleri içerir. locationReducer adlı reducer fonksiyonu, konum verilerinin state içinde nasıl güncelleneceğini belirler. Ayrıca, reset, changeName, startRecording, stopRecording ve addLocation gibi fonksiyonlar, ilgili eylemleri dispatch etmek için kullanılır. Bu fonksiyonlar, createDataContext ile oluşturulan Context ve Provider ile kullanılır. Başlangıç değerleri, konum verilerinin temsil edildiği state yapısını belirtir.
*/