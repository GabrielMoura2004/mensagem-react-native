import React,{ useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import PushNotification from 'react-native-push-notification';

const App = () => {
  const [notificationCount, setNotificationCount] = useState(0);

  useEffect(() => {
    PushNotification.configure({
      onNotification: function(notification) {
        setNotificationCount(notificationCount + 1);
        notification.finish(PushNotificationIOS)

        
      }
    }
    )})}    