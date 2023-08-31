import React, { useEffect, useState } from "react"; //ekran açıldığında çalışması için useeffect
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-navigation";
import { Text } from "react-native-elements";
import { requestForegroundPermissionsAsync } from "expo-location";
import Map from "../components/Map";



const TrackCreateScreen = () => {

    const [err,setErr] = useState(null)


  const startWatching = async () => {
    try {
      const { granted } = await requestForegroundPermissionsAsync();
      if (!granted) {
        throw new Error("Location permission not granted");
      }
    } catch (e) {
      setErr(e);
    }
  };

  useEffect (()=>{
    startWatching();
  },[]);

  return (
    <SafeAreaView forceInset={{ top: "always", left: "always" }}>
      <Text h2> Create A track</Text>
      <Map />
      {err ? <Text> Please enable location services</Text>: null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;

/*  
 const startWatching = async () => {
    try {
      const { granted } = await requestPermissionsAsync();
      if (!granted) {
        throw new Error('Location permission not granted');
      }
    } catch (e) {
      setErr(e);
    }
  };


  const { granted } = await requestForegroundPermissionsAsync();
  */
