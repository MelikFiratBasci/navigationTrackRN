import React, {  useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import Navlink from "../components/Navlink";
import { NavigationEvents } from "react-navigation";


const SignupScreen = ({ navigation }) => {
  const { state, signup,clearErrorMessage } = useContext(AuthContext);


  return (
    
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
        <AuthForm 
            headerText = "Sign Up for Export Box"
            errorMessage={state.errorMessage}
            submitButtonText="Sign Up"
            onSubmit={signup} /*bu anlama gelir => {({email,password})=> signup({email,password})} verilerin referansını signupta kullan gibi */
        />
        <Navlink 
            routeName = "Signin"
            text = "Already have an account sign in instead"
        />
      
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 200,
  },

});

export default SignupScreen;
