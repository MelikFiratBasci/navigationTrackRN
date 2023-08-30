import React, {useState} from 'react';
import { View, StyleSheet} from 'react-native'
import {Text, Input, Button} from 'react-native-elements'
import Spacer from '../components/Spacer';

const SignupScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('')



    return (
        //spacer componentste !! sadece aralık bırakmak için 
        <View style ={styles.container}>
            <Spacer>
            <Text h2>Sign Up For Tracker</Text>
            </Spacer>
            <Input 
            label ="Email" 
            value={email} 
            onChangeText={(newEmail)=> setEmail(newEmail) } 
            autoCapitalize='none'
            autoCorrect= {false}
            /> 
            {/*buraya doğrudan onChangeText ={setEmail} useStatesini çağırabiliriz */}
            <Spacer />
            <Input 
            secureTextEntry 
            label ="Password" 
            value ={password} 
            onChangeText={setPassword} 
            autoCapitalize='none'
            autoCorrect= {false}

            />
            <Spacer />
            <Spacer />
            <Button title ="Sign Up" /> 
        </View>
    )
}

SignupScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
  };



const styles = StyleSheet.create({
    container : {
     
        flex : 1,
        justifyContent : 'center',
        marginBottom :200
    }
});

export default SignupScreen;