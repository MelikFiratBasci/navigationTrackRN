import React, { useContext } from "react";
import { Text, StyleSheet, ActivityIndicator } from "react-native";
import MapView, { Polyline, Circle } from "react-native-maps";
import { Context as LocationContext } from "../context/LocationContext";

const Map = () => {
  // LocationContext'ten gelen durum ve konum bilgileri alınıyor
  const {
    state: { currentLocation, locations },
  } = useContext(LocationContext);

  // Eğer mevcut konum bilgisi yoksa, yüklenirken bir yüklenme göstergesi görüntülenir
  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
  }
  
  // Eğer mevcut konum bilgisi varsa, harita görüntülenir
  return (
    <MapView
      // Haritanın başlangıç bölgesi ve görüntü alanı belirlenir
      initialRegion={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
      region={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
      minZoomLevel={14} // Haritanın minumum yakınlaştırma seviyesi
      style={styles.map} // Harita bileşeninin stil ayarları
    >
      {/* Mevcut konumun etrafında bir daire çizilir */}
      <Circle
        center={currentLocation.coords}
        radius={30}
        strokeColor="rgba(158,158,255,1.0)"
        fillColor="rgba(158, 158, 255, 0.3)"
      />
      {/* Geçmiş konumların izini çizilir */}
      <Polyline coordinates={locations.map(loc => loc.coords)} />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

export default Map;

// Bu bileşen, kullanıcının mevcut konumunu ve geçmiş konumları harita üzerinde göstermek için kullanılır.
// Mevcut konum etrafında bir daire çizilir ve geçmiş konumlar iz olarak çizilir.
// Eğer mevcut konum bilgisi yoksa, yüklenme göstergesi görüntülenir.
