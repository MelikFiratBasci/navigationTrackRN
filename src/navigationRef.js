//her yerden (react yapısında olmayan vs) navigation yapabilmek için helper, hook gibi davranıyoruz
import { NavigationActions } from "react-navigation";


let navigator;


export const setNavigator = (nav) => {
    navigator = nav ;
};

export const navigate = (routeName, params) =>{
    navigator.dispatch(
        NavigationActions.navigate({
            routeName :routeName,
            params : params
        })
    );

};//app.js teki route name, ekrana aktarılmak istenen proplar