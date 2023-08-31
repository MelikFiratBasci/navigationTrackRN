// Gerekli kütüphaneler ve bileşenler alınıyor
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import Spacer from './Spacer';

// AuthForm bileşeni, giriş yapma veya kaydolma formları oluşturmak için kullanılabilir
const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
    // Kullanıcının email ve şifresini tutmak için state'ler oluşturuluyor
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>
            {/* Başlık */}
            <Spacer>
                <Text h2>{headerText}</Text>
            </Spacer>
            {/* Email girişi */}
            <Input
                label="Email"
                value={email}
                onChangeText={(newEmail) => setEmail(newEmail)} // Email state'i güncelleniyor
                autoCapitalize="none"
                autoCorrect={false}
            />
            {/* Şifre girişi */}
            <Spacer />
            <Input
                secureTextEntry // Şifre gizlensin
                label="Password"
                value={password}
                onChangeText={setPassword} // Şifre state'i güncelleniyor
                autoCapitalize="none"
                autoCorrect={false}
            />
            {/* Hata mesajı */}
            {errorMessage ? (
                <Text style={styles.errorMessage}>{errorMessage}</Text>
            ) : null}
            <Spacer />
            {/* Giriş veya kaydolma butonu */}
            <Button title={submitButtonText} onPress={() => onSubmit({ email, password })} />
        </>
    );
};

// Stil tanımlamaları
const styles = StyleSheet.create({
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginLeft: 15,
        marginTop: 15
    },
});

export default AuthForm;
// AuthForm bileşeni, giriş yapma veya kaydolma formları oluşturmak için kullanılır.
// Kullanıcının email ve şifresini almak üzere Input bileşenleri içerir.
// Girilen bilgiler onSubmit fonksiyonu aracılığıyla iletilir.
// Eğer errorMessage değeri varsa, hata mesajı görüntülenir.
