import { Stack, Redirect } from "expo-router";
import { useAuth } from "../../components/AuthContext";

export default function Layout() {
  const { authState } = useAuth();
  if (!authState.authenticated) return <Redirect href="/login" />;
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="track" />
      <Stack.Screen name="report" />
      <Stack.Screen name="otp-request" />
      <Stack.Screen name="employee-details/[id]" />
      <Stack.Screen name="attendance-details/[id]" />
      <Stack.Screen name="dashboard" />
      <Stack.Screen name="feedback" />
      <Stack.Screen name="employee-register" />
      <Stack.Screen name="create-face-model" />
      <Stack.Screen name="change-password" />
    </Stack>
  );
}
