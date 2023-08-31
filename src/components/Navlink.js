import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import Spacer from "./Spacer";
import { withNavigation } from "react-navigation";

// Dokunulabilir bir link oluşturan bileşen
const NavLink = ({ navigation, text, routeName }) => {
  return (
    // TouchableOpacity bileşeni, kullanıcının dokunabileceği bir link oluşturur ve belirtilen routeName'e yönlendirir
    <TouchableOpacity onPress={() => navigation.navigate({ routeName })}>
      <Spacer />
      <Text style={styles.link}>{text}</Text>
    </TouchableOpacity>
  );
};

// Stil tanımlamaları
const styles = StyleSheet.create({
  link: {
    color: "blue", // Link metni rengi
  },
});

// withNavigation, bileşeni bir navigation prop'u ile sarmalayarak navigation erişimi sağlar
export default withNavigation(NavLink);

// Bu bileşen, kullanıcılara dokunulabilir linkler sağlayarak sayfa gezinmesi yapma olanağı sunar.
// Link metni mavi renkte görüntülenir.
