import React, { useContext } from "react";
import { Input, Button } from "react-native-elements";
import Spacer from "./Spacer";
import { Context as LocationContext } from "../context/LocationContext";
import useSaveTrack from "../hooks/useSaveTrack";

// Konum bilgileri almak ve kaydetmek için kullanılan form bileşeni
const TrackForm = () => {
  // LocationContext'ten gelen durum ve fonksiyonları al
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);

  // useSaveTrack özel kancası
  const [saveTrack] = useSaveTrack();

  return (
    <>
      {/* İsim girişi */}
      <Spacer>
        <Input
          value={name}
          onChangeText={changeName}
          placeholder="Enter Name"
        />
      </Spacer>
      {/* Kayıt durumuna göre kaydetme veya kaydetmeyi durdurma butonları */}
      <Spacer>
        {recording ? (
          <Button title="Stop" onPress={stopRecording} />
        ) : (
          <Button title="Start Recording" onPress={startRecording} />
        )}
      </Spacer>
      {/* Kaydedilmiş konumları kaydetme butonu */}
      <Spacer>
        {!recording && locations.length ? (
          <Button title="Save Recording" onPress={saveTrack} />
        ) : null}
      </Spacer>
    </>
  );
};

export default TrackForm;
/*
Bu bileşen, kullanıcıya konum kaydetme ve yönetme işlevselliği sağlayan bir form sunar. Kullanıcı isim girebilir, kayıt başlatıp durdurabilir ve kaydedilmiş konumları kaydedebilir. Her bir buton, kullanıcının konum verilerini işlemesini sağlar.
*/
