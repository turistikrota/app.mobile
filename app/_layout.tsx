import { GluestackUIProvider, useToken } from "@gluestack-ui/themed";
import { Tabs } from "expo-router";
import React from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import {
  SafeAreaInsetsContext,
  SafeAreaProvider,
} from "react-native-safe-area-context";
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
  return (
    <SafeAreaInsetsContext.Consumer>
      {(insets) => (
        <View
          style={{
            flex: 1,
          }}
        >
          <Tabs
            safeAreaInsets={insets!}
            detachInactiveScreens={true}
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
                  <BoxIcon
                    name={"home"}
                    color={color}
                    width={size}
                    height={size}
                  />
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
                  <BoxIcon
                    name="route"
                    color={color}
                    width={size}
                    height={size}
                  />
                ),
              }}
            />
            <Tabs.Screen
              name="notification"
              options={{
                title: t("notification"),
                tabBarIcon: ({ color, size }) => (
                  <BoxIcon
                    name={"bell"}
                    color={color}
                    width={size}
                    height={size}
                  />
                ),
              }}
            />
            <Tabs.Screen
              name="panel"
              options={{
                href: null,
                title: t("panel"),
                tabBarIcon: ({ color, size }) => (
                  <BoxIcon
                    name="user"
                    color={color}
                    width={size}
                    height={size}
                  />
                ),
                headerShown: false,
                tabBarStyle: {
                  display: "none",
                },
              }}
            />
          </Tabs>
        </View>
      )}
    </SafeAreaInsetsContext.Consumer>
  );
}

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <FirebasePushProvider>
        <Provider store={store}>
          <GluestackUIProvider config={config}>
            <HomeLayout />
          </GluestackUIProvider>
        </Provider>
      </FirebasePushProvider>
    </SafeAreaProvider>
  );
}
