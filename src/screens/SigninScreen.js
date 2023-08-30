import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Authform from "../components/AuthForm";
import Navlink from "../components/Navlink";

const SigninScreen = () => {
  return (
    <View style = {styles.container} >
      <Authform
        headerText="Sign in to your account"
        errorMessage=""
        onSubmit={() => {}}
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

/* SigninScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};*/
