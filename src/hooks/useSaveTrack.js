import { useContext } from "react";
import { Context as TrackContext } from "../context/TrackContext";
import { Context as LocationContext } from "../context/LocationContext";
import { Context as AuthContext } from "../context/AuthContext";
import { Title } from "react-native-paper";
import { navigate } from "../navigationRef";

// İzlemeyi kaydetmeyi sağlayan fonksiyonun özel bir kancanın (hook) implementasyonu
export default () => {
  const { createTrack } = useContext(TrackContext);
  const {
    state: { locations, name },
    reset,
  } = useContext(LocationContext);

  // İzlemeyi kaydetme fonksiyonu
  const saveTrack = async () => {
    await createTrack(name, locations);
    reset();
    navigate('TrackList');
  };

  // İzlemeyi kaydetme fonksiyonunu döndürme
  return [saveTrack];
};
/*
Bu kod bloğu, izlemeyi kaydetmek için özel bir kancanın (hook) implementasyonunu içerir. createTrack fonksiyonu, TrackContext kullanılarak alınır ve konum ve isim verileri, LocationContext kullanılarak alınır. saveTrack fonksiyonu, izlemeyi kaydetmeyi sağlar. Kaydetme işlemi tamamlandıktan sonra reset fonksiyonu ile konum ve isim verileri sıfırlanır ve ardından navigate fonksiyonu ile TrackList sayfasına yönlendirme yapılır. Sonuç olarak, bu özel kancayı kullanarak izlemeyi kaydetme işlemini gerçekleştirmek mümkün olur.
 */