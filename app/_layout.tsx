import { GluestackUIProvider, useToken } from "@gluestack-ui/themed";
import { Tabs } from "expo-router";
import React from "react";
import { useTranslation } from "react-i18next";
import { AppRegistry, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import BoxIcon from "~assets/Icons/BoxIcon";
import Logo from "~assets/Icons/Logo";
import FirebasePushProvider from "~components/FirebasePushProvider";
import { config } from "~config/gluestack-ui.config";
import "~localization/i18n";
import AccountHeadButton from "~partials/account/AccountHeadButton";
import { store } from "~store";

function HomeLayout() {
  const { t } = useTranslation("menu");
  const secondaryColor = useToken("colors", "secondary500");
  const shadowColor = useToken("colors", "borderDark400");

  return (
    <View
      style={{
        height: "100%",
      }}
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
          tabBarStyle: {
            display: "none",
            opacity: 0,
          },
          headerStyle: {
            shadowColor: shadowColor,
          },
          headerRightContainerStyle: {
            paddingRight: 8,
          },
          headerTitle: () => null,
          headerRight: () => <AccountHeadButton />,
        }}
      >
        <Tabs.Screen name="index" options={{}} />
        <Tabs.Screen name="place/places" options={{}} />
        <Tabs.Screen name="place/[slug]" options={{}} />
        {/*
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
        */}
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

function RootLayout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView edges={["bottom"]}>
        <Provider store={store}>
          <FirebasePushProvider>
            <GluestackUIProvider config={config}>
              <HomeLayout />
            </GluestackUIProvider>
          </FirebasePushProvider>
        </Provider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

AppRegistry.registerComponent("Turistikrota", () => RootLayout);

export default RootLayout;
