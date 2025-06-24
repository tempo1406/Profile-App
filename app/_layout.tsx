import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";
import { ProfileProvider } from "../context/ProfileContext";
import { ThemeProvider } from "../context/ThemeContext";
import './globals.css';

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider>
      <ProfileProvider>
        <StatusBar hidden={true} style="auto"  />
        <Stack
          screenOptions={{
            headerShown: false,
            headerShadowVisible: false,
            animation: 'fade',
            contentStyle: {
              backgroundColor: 'transparent',
            }
          }}
        >
          <Stack.Screen name="index" options={{ title: "Home" }} />
          <Stack.Screen name="profile" options={{ title: "Profile" }} />
          <Stack.Screen name="edit-profile" options={{ title: "Edit Profile" }} />
          <Stack.Screen name="settings" options={{ title: "Settings" }} />
        </Stack>
      </ProfileProvider>
    </ThemeProvider>
  );
}
