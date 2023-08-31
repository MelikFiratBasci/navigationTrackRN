import React from "react";
import { View, StyleSheet } from 'react-native';

// Boşluk bırakan bileşen
const Spacer = ({ children }) => {
    return (
        // children bileşeni içeren bir View bileşeni oluşturur ve etrafına boşluk bırakır
        <View style={styles.spacer}>{children}</View>
    );
};

// Stil tanımlamaları
const styles = StyleSheet.create({
    spacer: {
        margin: 15, // Boşluk miktarı
    },
});

export default Spacer;
