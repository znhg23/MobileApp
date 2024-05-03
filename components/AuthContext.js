import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import * as SecureStore from "expo-secure-store";
import BASE_URL from "../env";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    token: null,
    authenticated: null,
    role: null,
  });

  const onRegister = async (account, password) => {
    // Your implementation for registration
  };

  const onLogin = async (account, password) => {
    // Your implementation for login
    try {
      console.log("account", account);
      const response = await axios.post(`${BASE_URL}/auth/login`, {
        account_name: account,
        password: password,
      });
      const token = response.data.access_token;
      const role = response.data.position;
      console.log("token", token);
      setAuthState({ token, authenticated: true, role });
      axios.defaults.headers.common["Authorization"] = token;
      await SecureStore.setItemAsync("token", token);
      await SecureStore.setItemAsync("role", role);
      return response;
    } catch (error) {
      return { error };
      //console.error("Failed to login:", error);
    }
  };

  const onLogout = async () => {
    // Your implementation for logout
    setAuthState({ token: null, authenticated: false, role: null });
    axios.defaults.headers.common["Authorization"] = null;
    await SecureStore.deleteItemAsync("token");
    await SecureStore.deleteItemAsync("role");
  };

  useEffect(() => {
    const loadAuthState = async () => {
      try {
        const token = await SecureStore.getItemAsync("token");
        const role = await SecureStore.getItemAsync("role");
        if (token) {
          setAuthState({ token, authenticated: true, role });
        } else {
          setAuthState({ token: null, authenticated: false, role: null });
        }
      } catch (error) {
        console.error("Failed to load authentication state:", error);
      }
    };

    loadAuthState();
  }, []);

  return (
    <AuthContext.Provider value={{ authState, onRegister, onLogin, onLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuth };
