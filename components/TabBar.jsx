import React from "react";
import { cn } from "@/lib/utils";
import { View, Text } from "react-native";
import { useLinkBuilder } from "@react-navigation/native";
import { PlatformPressable } from "@react-navigation/elements";
import { Home, Activities, Pets } from "@/icons";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

const Icons = {
   index: (props) => <Home size={24} {...props} />,
   activities: (props) => <Activities size={24} {...props} />,
   pets: (props) => <Pets size={24} {...props} />
};

export default function TabBar({ state, descriptors, navigation }) {
   const { buildHref } = useLinkBuilder();

   return (
      <View className="flex flex-row bg-white p-2">
         {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];
            const scale = useSharedValue(0.5);

            const label =
               options.tabBarLabel !== undefined
                  ? options.tabBarLabel
                  : options.title !== undefined
                    ? options.title
                    : route.name;

            const isFocused = state.index === index;

            const onPress = () => {
               const event = navigation.emit({
                  type: "tabPress",
                  target: route.key,
                  canPreventDefault: true
               });

               if (!isFocused && !event.defaultPrevented) {
                  navigation.navigate(route.name, route.params);
               }
            };

            const onLongPress = () => {
               navigation.emit({
                  type: "tabLongPress",
                  target: route.key
               });
            };

            React.useEffect(() => {
               scale.value = withTiming(isFocused ? 1 : 0.5, { duration: 120 });
            }, [isFocused]);

            const animatedStyle = useAnimatedStyle(() => ({
               transform: [{ scaleX: scale.value }]
            }));

            return (
               <View key={route.name} className="flex-grow">
                  <PlatformPressable
                     href={buildHref(route.name, route.params)}
                     accessibilityState={isFocused ? { selected: true } : {}}
                     accessibilityLabel={options.tabBarAccessibilityLabel}
                     testID={options.tabBarButtonTestID}
                     onPress={onPress}
                     onLongPress={onLongPress}
                     className="flex items-center justify-center"
                     android_ripple={{ borderless: true }}
                  >
                     <View className={cn("relative px-5 py-1.5")}>
                        <Animated.View
                           style={animatedStyle}
                           className={cn("absolute inset-0 !rounded-full overflow-hidden", {
                              "bg-secondary": isFocused
                           })}
                        />

                        {Icons[route.name]({
                           filled: isFocused,
                           fill: isFocused ? "#145f3e" : "#151515"
                        })}
                     </View>
                     <Text className={cn("font-strong text-sm pt-1")}>{label}</Text>
                  </PlatformPressable>
               </View>
            );
         })}
      </View>
   );
}
