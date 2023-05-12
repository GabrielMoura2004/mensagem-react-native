import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import PushNotification from 'react-native-push-notification';
import BackgroundTimer from 'react-native-background-timer';

const NotificationService = () => {
  useEffect(() => {
    // Configuração do agendamento de notificações
    const notifications = [
      { id: '1', message: 'Mensagem de cupom disponível' },
      { id: '2', message: 'Mensagem bem-humorada sobre a próxima refeição' },
      { id: '3', message: 'Mensagem de ofertas' },
    ];
    let notificationIndex = 0;

    BackgroundTimer.runBackgroundTimer(() => {
      PushNotification.localNotification({
        title: 'Notificação',
        message: notifications[notificationIndex].message,
        id: notifications[notificationIndex].id,
      });

      notificationIndex++;
      if (notificationIndex >= notifications.length) {
        notificationIndex = 0;
      }
    }, 300000); // 5 minutos em milissegundos

    return () => {
      BackgroundTimer.stopBackgroundTimer();
    };
  }, []);

  return (
    <View>
      <Text>Serviço de notificação agendado</Text>
    </View>
  );
};

export default NotificationService;
