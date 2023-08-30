import React ,{useEffect, useContext} from 'react'; 
import {Context as AuthContext} from '../context/AuthContext'


const InitialScreen = () =>{
    const {tryLocalSignin} = useContext(AuthContext)
    
    useEffect(() => {
        tryLocalSignin();
      }, []); //token kontrolü ekran yüklendiğinde tek seferlik!
    
    return null;
}
export default InitialScreen;