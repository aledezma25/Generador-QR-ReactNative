import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const RegistroQR = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [datos, setDatos] = useState('');

  const generarQR = () => {
    const datosQR = `Nombre: ${nombre}, Email: ${email}`;
    setDatos(datosQR);
  };

  return (
    <View>
      <Text>Ingrese su nombre:</Text>
      <TextInput
        placeholder="Nombre"
        value={nombre}
        onChangeText={(text) => setNombre(text)}
      />

      <Text>Ingrese su correo electrónico:</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <Button title="Generar QR" onPress={generarQR} />

      {datos !== '' && (
        <View>
          <Text>Datos:</Text>
          <Text>{datos}</Text>
          <QRCode value={datos} size={200} />
        </View>
      )}
    </View>
  );
};

export default RegistroQR;
