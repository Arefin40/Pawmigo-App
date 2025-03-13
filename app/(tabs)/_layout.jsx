import React from "react";
import { Tabs } from "expo-router";
import TabBar from "@/components/TabBar";

export default function TabLayOut() {
   return (
      <Tabs screenOptions={{ headerShown: false }} tabBar={(props) => <TabBar {...props} />}>
         <Tabs.Screen name="index" options={{ title: "Home" }} />
         <Tabs.Screen name="activities" options={{ title: "Activities" }} />
         <Tabs.Screen name="pets" options={{ title: "My Pets" }} />
      </Tabs>
   );
}
