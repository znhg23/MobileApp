import { Stack, Redirect } from "expo-router";
import { useAuth } from "../../components/AuthContext";

export default function Layout() {
  const { authState } = useAuth();
  if (!authState.authenticated) return <Redirect href="/login" />;
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="track" />
      <Stack.Screen name="dashboard" />
      <Stack.Screen name="report" />
      <Stack.Screen name="otp-request" />
      <Stack.Screen name="employee-details" />
      <Stack.Screen name="attendance-details/[id]" />
    </Stack>
  );
}
