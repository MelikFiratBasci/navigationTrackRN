import React, {useContext} from "react";
import { View, StyleSheet, Text } from "react-native";
import { NavigationEvents } from "react-navigation";// navigation events navigation işlemleri yapıldığında tetiklenir
import Authform from "../components/AuthForm";
import Navlink from "../components/Navlink";
import { Context } from "../context/AuthContext";
const SigninScreen = () => {
    const {state, signin, clearErrorMessage} = useContext(Context)
  return (
    <View style = {styles.container} >
       <NavigationEvents onWillFocus={clearErrorMessage} />

      <Authform
        headerText="Sign in to your account"
        errorMessage={state.errorMessage}
        onSubmit={signin}
        submitButtonText="Sign In"
      />
      <Navlink
        text="Dont have an account? sign up instead"
        routeName="Signup"
      />
    </View>
  );
};

SigninScreen.navigationOptions = () => {
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
export default SigninScreen;

/* 
<NavigationEvents onWillFocus={clearErrorMessage}


};*/
