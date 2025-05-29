import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import Button from '../components/Button';
import Header from '../components/Header';
import ScreenContainer from '../components/ScreenContainer';
import ThemeToggleSwitch from '../components/ThemeToggleSwitch';
import { useTheme } from '../context/ThemeContext';

const SettingsScreen = () => {
  const { isDarkMode } = useTheme();
  
  const SectionHeader = ({ title }: { title: string }) => (
    <View className="border-b border-gray-200 dark:border-gray-700">
      <Text className={`px-4 py-3 ${
        isDarkMode ? 'text-gray-400' : 'text-gray-500'
      } uppercase text-xs tracking-wider font-semibold`}>
        {title}
      </Text>
    </View>
  );
  
  return (
    <ScreenContainer>
      <Header title="Settings" />
      <ScrollView className="flex-1">
        <View className="p-4">
          <Text className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
            App Settings
          </Text>
          
          <View className={`rounded-xl ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          } shadow-sm overflow-hidden mb-6`}>
            <SectionHeader title="Appearance" />
            <ThemeToggleSwitch />
          </View>
          
          <View className={`rounded-xl ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          } shadow-sm overflow-hidden mb-6`}>
            <SectionHeader title="About" />
            <View className="px-4 py-4">
              <View className="flex-row items-center">
                <View className={`mr-3 p-2 rounded-full ${isDarkMode ? 'bg-blue-900/30' : 'bg-blue-100'}`}>
                  <Ionicons name="information-circle" size={20} color={isDarkMode ? "#93c5fd" : "#3b82f6"} />
                </View>
                <View>
                  <Text className={`text-base font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
                    Version
                  </Text>
                  <Text className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    1.0.0
                  </Text>
                </View>
              </View>
            </View>
          </View>
          
          <View className="flex-row gap-4">
            <Button 
              title="Back to Home" 
              onPress={() => router.push('/')}
              variant="secondary"
              className="flex-1"
            />
            <Button 
              title="View Profile" 
              onPress={() => router.push('/profile')}
              className="flex-1"
            />
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

export default SettingsScreen;
