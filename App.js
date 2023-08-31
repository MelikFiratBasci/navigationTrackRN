import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import AccountScreen from "./src/screens/AccountScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import InitialScreen from "./src/screens/InitialScreen";

import { Provider as AuthProvider } from "./src/context/AuthContext";
import { setNavigator } from "./src/navigationRef";
import { Provider as LocationProvider } from "./src/context/LocationContext";
import { Provider as TrackProvider } from "./src/context/TrackContext";
import { FontAwesome } from "@expo/vector-icons";

// TrackList için Stack Navigator
const trackListFlow = createStackNavigator({
  TrackList: TrackListScreen,
  TrackDetail: TrackDetailScreen,
});
trackListFlow.navigationOptions = {
  title: "Tracks",
  tabBarIcon: <FontAwesome name="th-list" size={20} />,
};

// Ana gezinme işlemleri için Switch Navigator
const switchNavigator = createSwitchNavigator({
  initial: InitialScreen,
  loginFlow: createStackNavigator({
    Signin: SigninScreen,
    Signup: SignupScreen,
  }),

  mainFlow: createMaterialBottomTabNavigator(
    {
      trackListFlow: trackListFlow,
      TrackCreate: TrackCreateScreen,
      Account: AccountScreen,
    },
    {
      initialRouteName: "trackListFlow",
      activeColor: "black",
      inactiveColor: "white",
      barStyle: { backgroundColor: "darkorange" },
    }
  ),
});

// Ana uygulama bileşeni
const App = createAppContainer(switchNavigator);
export default () => {
  return (
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <App
            ref={(navigator) => {
              setNavigator(navigator);
            }}
          />
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  );
};
/*
Bu kod bloğu, bir mobil uygulamanın temel gezinme ve bileşen yapılarını oluşturan bileşenler ve yönlendirmeler içerir. 
Farklı ekranları içeren Stack ve Tab Navigator'lar oluşturulur ve Switch Navigator ile yönlendirme işlemleri yapılır. 
Ayrıca, AuthProvider, LocationProvider ve TrackProvider ile bağlam verileri sağlanır ve setNavigator fonksiyonu ile gezinme işlemleri yardımcı fonksiyonlara iletilir. 
Sonuç olarak, bu kod parçası, uygulamanın gezinme yapısını ve bileşen yapısını belirler.





*/