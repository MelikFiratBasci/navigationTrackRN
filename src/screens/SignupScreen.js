import React, { useState, useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(state.errorMessage);

  return (
    //spacer componentste !! sadece aralık bırakmak için
    <View style={styles.container}>
      <Spacer>
        <Text h2>Sign Up For Tracker</Text>
      </Spacer>
      <Input
        label="Email"
        value={email}
        onChangeText={(newEmail) => setEmail(newEmail)}
        autoCapitalize="none"
        autoCorrect={false}
      />
      {/*buraya doğrudan onChangeText ={setEmail} useStatesini çağırabiliriz */}
      <Spacer />
      <Input
        secureTextEntry
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
      />
      {state.errorMessage ? <Text style = {styles.errorMessage} >{state.errorMessage} </Text> : null}
      <Spacer />
      <Button title="Sign Up" onPress={() => signup({ email, password })} />
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
  errorMessage : {
    fontSize : 16,
    color : 'red',
    marginLeft : 15,
    marginTop : 15
  }
});

export default SignupScreen;
