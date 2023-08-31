import {
  requestForegroundPermissionsAsync,
  watchPositionAsync,
  Accuracy,
} from "expo-location";
import { useState, useEffect } from "react";

// Konum izlemeyi sağlayan özel kancanın (hook) implementasyonu
export default (shouldTrack, callback) => {
  const [err, setErr] = useState(null);

  useEffect(() => {
    let subscriber;

    const startWatching = async () => {
      try {
        const { granted } = await requestForegroundPermissionsAsync();
        if (!granted) {
          throw new Error("Location permission not granted");
        }
        
        // Konum izlemesi başlatılıyor
        subscriber = await watchPositionAsync(
          {
            accuracy: Accuracy.BestForNavigation,
            timeInterval: 1000,
            distanceInterval: 10,
          },
          callback
        );
      } catch (e) {
        setErr(e);
      }
    };

    if (shouldTrack) {
      startWatching();
    } else {
      if (subscriber) {
        subscriber.remove();
      }
      subscriber = null;
    }

    // Komponent etkileşim döngüsünden çıkarken yapılacak temizlik
    return () => {
      if (subscriber) {
        subscriber.remove();
      }
    };
  }, [shouldTrack, callback]);

  // Hata durumunu döndürme
  return [err];
};
/* 
Bu kod bloğu, özel bir kancanın (hook) implementasyonunu içerir. Bu kancanın amacı, belirli bir koşula bağlı olarak konum izlemesi başlatmak veya durdurmak ve ilgili hataları işlemektir. shouldTrack ve callback parametreleri ile izleme koşulu ve konum güncellemesi geldiğinde yapılacak işlem belirtilir. useEffect içinde konum izlemesi başlatılır veya durdurulur, ve komponent etkileşim döngüsünden çıkarken izlemeyi kaldırır. Sonuç olarak, bu kancanın kullanılmasıyla, belirli bir koşula bağlı olarak konum izlemesi yapmak mümkün olur.
*/