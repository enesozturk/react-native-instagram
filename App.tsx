import React from "react";
import { LogBox, View } from "react-native";

import { PortalProvider } from "@gorhom/portal";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import useSWR from "swr";

import Home from "./screens/Home";
import DetailScreen from "./screens/Details";
import { DetailScreenProvider } from "./context/detail-screen";
import useAnimatedValues from "./hooks/use-animated-values";
import { UNSPLASH_API_URL } from "./constants/api";

LogBox.ignoreLogs([
  "Possible stableId",
  "estimatedItemSize",
  "Looks like you're",
  "Require cycle:",
]);

const Stack = createNativeStackNavigator();

export default function App() {
  const { animatedRef, pageX, pageY, active, headerHeight } =
    useAnimatedValues();

  return (
    <SafeAreaProvider>
      <PortalProvider>
        <View
          style={{
            flex: 1,
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.3)",
          }}
        >
          <DetailScreenProvider>
            <NavigationContainer>
              <Stack.Navigator
                defaultScreenOptions={{
                  gestureEnabled: true,
                }}
              >
                <Stack.Screen
                  name="Home"
                  component={() => (
                    <Home
                      {...{
                        animatedRef,
                        active,
                        pageX,
                        pageY,
                        headerHeight,
                      }}
                    />
                  )}
                />
              </Stack.Navigator>
            </NavigationContainer>
            <DetailScreen
              {...{
                active,
                pageX,
                pageY,
                headerHeight,
              }}
            />
          </DetailScreenProvider>
        </View>
      </PortalProvider>
    </SafeAreaProvider>
  );
}
