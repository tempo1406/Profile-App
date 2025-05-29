import { router } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";
import Button from "../components/Button";
import Header from "../components/Header";
import ScreenContainer from "../components/ScreenContainer";
import { useTheme } from "../context/ThemeContext";

export default function HomeScreen() {
  const { isDarkMode } = useTheme();
  
  return (
    <ScreenContainer>
      <Header title="My Profile App" showBackButton={false} />
      <View className="flex-1 justify-center items-center px-4">
        <View className={`p-8 rounded-full mb-6 ${isDarkMode ? 'bg-purple-800/20' : 'bg-purple-200/70'}`}>
          <Image 
            source={require('../assets/images/react-logo.png')}
            className="w-32 h-32"
          />
        </View>
        
        <Text className={`text-4xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
          Welcome!
        </Text>
        
        <Text className={`text-lg text-center mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          This is your personal profile app. View and manage your profile information.
        </Text>
        
        <View className="w-full gap-4">
          <Button 
            title="Go to Profile" 
            onPress={() => router.push('/profile')}
            className="mb-3"
            icon="person-outline"
          />
          
          <Button 
            title="Settings" 
            onPress={() => router.push('/settings')}
            variant="secondary"
            icon="settings-outline"
          />
        </View>
      </View>
    </ScreenContainer>
  );
}
