import React from 'react';
import { View, Text, Button } from 'react-native';
import PushNotification from 'react-native-push-notification';

const HomeScreen = () => {
  const handleTestNotification = () => {
    PushNotification.localNotification({
      title: 'Notificação de teste',
      message: 'Mensagem de cupom disponível',
    });
  };

  return (
    <View>
      <Text>Logo da empresa</Text>
      <Button title="Testar notificação" onPress={handleTestNotification} />
    </View>
  );
};

export default HomeScreen;