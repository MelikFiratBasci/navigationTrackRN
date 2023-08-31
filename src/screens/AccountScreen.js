import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-navigation";
import { Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";
import {FontAwesome} from '@expo/vector-icons'



const AccountScreen = () => {
  const { signout } = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.safeArea} forceInset={{ top: "always" }} >
      <Text style={{ fontSize: 48 }}>Account Screen</Text>
      <Spacer>
        <Button title="Sign Out" onPress={signout} />
      </Spacer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    safeArea  :{
        marginTop :40
    }
});


AccountScreen.navigationOptions ={
  title : 'Account',
  tabBarIcon: <FontAwesome name="gear" size={20} /> 
}

export default AccountScreen;
