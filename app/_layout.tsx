import { GluestackUIProvider, Pressable, useToken } from "@gluestack-ui/themed";
import { Link, Tabs, router } from "expo-router";
import React from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { Provider } from "react-redux";
import BoxIcon from "~assets/Icons/BoxIcon";
import Logo from "~assets/Icons/Logo";
import { config } from "~config/gluestack-ui.config";
import "~localization/i18n";
import { store } from "~store";

function HomeLayout() {
  const { t } = useTranslation("menu");
  const insets = useSafeAreaInsets();
  const secondaryColor = useToken("colors", "secondary500");
  return (
    <View style={{ flex: 1 }}>
      {/*
      <Stack
        screenOptions={{
          contentStyle: {
            backgroundColor: "$white",
          },
          headerLeft: (props) => <HeaderLeft {...props} />,
          headerTitle: (props) => <HeaderTitle {...props} />,
          headerRight: (props) => <HeaderRight {...props} />,
        }}
      >
        <Stack.Screen name="apps" />
        <Stack.Screen name="auth" />
        <Stack.Screen name="agreement/[id]" />
        <Stack.Screen name="index" />
        <Stack.Screen name="account/index" />
      </Stack>
       */}
      <Tabs
        safeAreaInsets={insets}
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
          headerRight: () => (
            <Link href="/panel">
              <Pressable onPress={() => router.push("/panel")}>
                <BoxIcon name="user" />
              </Pressable>
            </Link>
          ),
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
      <Provider store={store}>
        <GluestackUIProvider config={config}>
          <HomeLayout />
        </GluestackUIProvider>
      </Provider>
    </SafeAreaProvider>
  );
}
