import firebase from "@react-native-firebase/app";
import "@react-native-firebase/messaging";
import { FirebaseMessagingTypes } from "@react-native-firebase/messaging";
import React, { useEffect } from "react";
import { Platform } from "react-native";
import PushNotification from "react-native-push-notification";

const FirebasePushProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const getToken = () => {
    firebase
      .messaging()
      .getToken({
        appName: firebase.app().name,
        senderId: firebase.app().options.messagingSenderId,
      })
      .then((x) => console.log(x))
      .catch((e) => console.log(e));
  };
  const requestPermissions = () => {
    firebase
      .messaging()
      .requestPermission()
      .then((status: FirebaseMessagingTypes.AuthorizationStatus) => {
        if (status === 1) {
          console.log("Authorized");
          onMessage();
        } else {
          console.log("Not authorized");
        }
      })
      .catch((e) => console.log(e));
  };
  const onMessage = () => {
    firebase.messaging().onMessage((response) => {
      showNotification(response.data!.notification);
    });
  };
  const showNotification = (notification: any) => {
    console.log("Showing notification");
    console.log(JSON.stringify(notification));
    PushNotification.localNotification({
      title: notification.title,
      message: notification.body!,
    });
  };

  useEffect(() => {
    getToken();
    if (Platform.OS === "ios") {
      requestPermissions();
    } else {
      onMessage();
    }
  }, []);

  return <>{children}</>;
};

export default FirebasePushProvider;
