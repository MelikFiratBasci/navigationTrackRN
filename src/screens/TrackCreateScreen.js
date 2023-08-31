//import '../_mockLocation' //only for test
import React, { useContext, useCallback } from "react"; //ekran açıldığında çalışması için useeffect
import { StyleSheet } from "react-native";
import { SafeAreaView, withNavigationFocus } from "react-navigation";
import { Text } from "react-native-elements";
import useLocation from "../hooks/useLocation";
import Map from "../components/Map";
import { Context as LocationContext } from "../context/LocationContext";
import TrackForm from "../components/TrackForm";
import {FontAwesome} from '@expo/vector-icons'


const TrackCreateScreen = ({ isFocused }) => {
  // is focused flag withnavigatonfocus için başlatıldı mı kontrol eder flag bool değer alır
  const { state :{recording}, addLocation } = useContext(LocationContext);
  const callback = useCallback((location) => {
    addLocation(location, recording);
  },[recording]);
  const [err] = useLocation(isFocused || recording,callback); //(addLocation)
  //console.log(isFocused);
  return (
    <SafeAreaView forceInset={{ top: "always", left: "always" }}>
      <Text h2> Create A track</Text>
      <Map />
      {err ? <Text> Please enable location services</Text> : null}
      <TrackForm />
    </SafeAreaView>
  );
  /* Farklı bir yere navigasyon (onwillblur) 
    
  */
};

TrackCreateScreen.navigationOptions ={
  title : 'Add Track',
  tabBarIcon: <FontAwesome name="plus" size={20} /> 
}

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);
