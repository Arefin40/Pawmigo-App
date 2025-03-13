import React from "react";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { Text } from "react-native";
import { Mulish_500Medium, Mulish_600SemiBold, Mulish_700Bold } from "@expo-google-fonts/mulish";
import "@/global.css";

export default function RootLayout() {
   const [fontsLoaded] = useFonts({ Mulish_500Medium, Mulish_600SemiBold, Mulish_700Bold });

   if (!fontsLoaded) {
      return <Text>Loading fonts...</Text>;
   }

   return (
      <Stack screenOptions={{ headerShown: false }}>
         <Stack.Screen name="(tabs)" />
      </Stack>
   );
}
