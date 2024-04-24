import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="track" />
      <Stack.Screen name="dashboard" />
      <Stack.Screen name="report" />
      <Stack.Screen name="otp-request" />
      <Stack.Screen name="employee-details" />
    </Stack>
  );
}
