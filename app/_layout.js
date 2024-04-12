import { Stack } from "expo-router";
import { ScreenHeaderBtn, NotificationBtn } from "../components";
export default function Layout() {
  return (
    <Stack
      screenOptions={() => ({
        title: "Home",
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "white",
        },
        headerShadowVisible: false,
        headerLeft: () => <ScreenHeaderBtn />,
        headerRight: () => <NotificationBtn />,
        headerTitleStyle: {
          color: "#0E305D",
          fontSize: 20,
          fontWeight: "normal",
        },
      })}
    >
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
