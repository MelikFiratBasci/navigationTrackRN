import AsyncStorage from "@react-native-async-storage/async-storage";
import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import { navigate } from "../navigationRef";

// Oturum durumu yönetimini sağlayan reducer fonksiyonu
const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signup":
      return { errorMessage: "", token: action.payload };
    case "signin":
      return { errorMessage: "", token: action.payload };
    case "clear_error_message":
      return { ...state, errorMessage: "" };
    case "signout":
      return { token: null, errorMessage: "" };
    default:
      return state;
  }
};

// Lokal oturum durumunu kontrol etmeye yarayan fonksiyon
const tryLocalSignin = (dispatch) => async () => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    dispatch({ type: "signin", payload: token });
    navigate("TrackList");
  } else {
    navigate("loginFlow");
  }
};

// Hata mesajını temizlemeye yarayan fonksiyon
const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: "clear_error_message" });
};

// Kullanıcı kayıt işlemini sağlayan fonksiyon
const signup =
  (dispatch) =>
  async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signup", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "signup", payload: response.data.token });
      navigate("TrackList");
    } catch (error) {
      console.log(error);
      dispatch({
        type: "add_error",
        payload: "something went wrong with sign up",
      });
    }
  };

// Kullanıcı giriş işlemini sağlayan fonksiyon
const signin =
  (dispatch) =>
  async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signin", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "signin", payload: response.data.token });
      navigate("TrackList");
    } catch (error) {
      console.log(error);
      dispatch({
        type: "add_error",
        payload: "something went wrong with sign in",
      });
    }
  };

// Kullanıcı çıkış işlemini sağlayan fonksiyon
const signout = (dispatch) => async () => {
  await AsyncStorage.removeItem("token");
  dispatch({ type: "signout" });
  navigate("loginFlow");
};

// createDataContext ile state yönetimi için gerekli olan Provider ve Context oluşturuluyor
export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signup, signout, clearErrorMessage, tryLocalSignin },
  { token: null, errorMessage: "" }
);

/*
Bu kod bloğu, oturum durumu yönetimini sağlayan bir Context ve ilgili fonksiyonları içerir. Kullanıcının kaydolma, giriş yapma ve çıkış yapma işlemlerini yönetir. Ayrıca, oturum durumunu yerel olarak kontrol etmek için tryLocalSignin fonksiyonu ve hata mesajlarını temizlemek için clearErrorMessage fonksiyonu bulunur. Oturum durumu, authReducer adlı reducer fonksiyonu tarafından yönetilir.
*/
