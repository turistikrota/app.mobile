import { GluestackUIProvider, useToken } from "@gluestack-ui/themed";
import { useFonts } from "expo-font";
import { Tabs } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import BoxIcon from "~assets/Icons/BoxIcon";
import Logo from "~assets/Icons/Logo";
import FirebasePushProvider from "~components/FirebasePushProvider";
import { config } from "~config/gluestack-ui.config";
import "~localization/i18n";
import AccountHeadButton from "~partials/account/AccountHeadButton";
import { store } from "~store";

SplashScreen.preventAutoHideAsync();

function HomeLayout() {
  const [fontsLoaded] = useFonts({
    Verdana: require("../assets/fonts/verdana.ttf"),
  });
  const { t } = useTranslation("menu");
  const secondaryColor = useToken("colors", "secondary500");

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View
      style={{
        height: "100%",
      }}
      onLayout={onLayoutRootView}
    >
      <Tabs
        safeAreaInsets={{
          bottom: 0,
          left: 0,
          right: 0,
          top: 0,
        }}
        screenOptions={{
          tabBarActiveTintColor: secondaryColor,
          tabBarActiveBackgroundColor: "transparent",
          headerLeft: () => <Logo />,
          headerLeftContainerStyle: {
            paddingLeft: 8,
          },
          headerRightContainerStyle: {
            paddingRight: 8,
          },
          headerTitle: () => null,
          headerRight: () => <AccountHeadButton />,
        }}
      >
        <Tabs.Screen
          name="search/index"
          options={{
            href: null,
          }}
        />
        <Tabs.Screen
          name="profile/[userName]"
          options={{
            href: null,
          }}
        />
        <Tabs.Screen
          name="index"
          options={{
            title: t("home"),
            tabBarIcon: ({ color, size }) => (
              <BoxIcon name={"home"} color={color} width={size} height={size} />
            ),
            tabBarIconStyle: {
              color: secondaryColor,
            },
          }}
        />
        <Tabs.Screen
          name="apps"
          options={{
            title: t("route"),
            tabBarIcon: ({ color, size }) => (
              <BoxIcon name="route" color={color} width={size} height={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="notification"
          options={{
            title: t("notification"),
            tabBarIcon: ({ color, size }) => (
              <BoxIcon name={"bell"} color={color} width={size} height={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="panel"
          options={{
            href: null,
            title: t("panel"),
            tabBarIcon: ({ color, size }) => (
              <BoxIcon name="user" color={color} width={size} height={size} />
            ),
            headerShown: false,
            tabBarStyle: {
              display: "none",
            },
          }}
        />
      </Tabs>
    </View>
  );
}

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView edges={["bottom"]}>
        <FirebasePushProvider>
          <Provider store={store}>
            <GluestackUIProvider config={config}>
              <HomeLayout />
            </GluestackUIProvider>
          </Provider>
        </FirebasePushProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
