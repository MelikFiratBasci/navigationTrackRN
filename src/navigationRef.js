// Her yerden (React yapısında olmayan vs) gezinme (navigation) işlemleri yapabilmek için yardımcı fonksiyonlar oluşturuluyor.
import { NavigationActions } from "react-navigation";

let navigator;

// Navigator'ı ayarlayan fonksiyon
export const setNavigator = (nav) => {
    navigator = nav;
};

// Belirtilen rota adına ve parametrelere göre gezinme işlemini gerçekleştiren fonksiyon
export const navigate = (routeName, params) => {
    navigator.dispatch(
        NavigationActions.navigate({
            routeName: routeName,
            params: params
        })
    );
};
/*

Bu kod bloğu, navigasyon işlemlerini yapabilmek için yardımcı fonksiyonlar içerir. setNavigator fonksiyonu ile navigator ayarlanır, ve navigate fonksiyonu ile belirtilen rota adına ve parametrelere göre gezinme işlemi yapılır. Bu yardımcı fonksiyonlar, navigasyon işlemlerini farklı bileşenlerde kullanabilmek için kullanılır.
*/