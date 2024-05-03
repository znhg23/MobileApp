import { Slot } from "expo-router";
import { AuthProvider } from "../components/AuthContext";

export default function Root() {
  return (
    <AuthProvider>
      <Slot />
    </AuthProvider>
  );
}
