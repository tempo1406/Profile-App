import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Switch, Text, View } from 'react-native';
import { useTheme } from '../context/ThemeContext';

const ThemeToggleSwitch: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <View className="px-4 py-4">
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center">
          <View className={`mr-3 p-2 rounded-full ${isDarkMode ? 'bg-purple-900/30' : 'bg-purple-200'}`}>
            <Ionicons 
              name={isDarkMode ? "moon" : "sunny"} 
              size={20} 
              color={isDarkMode ? "#d8b4fe" : "#9333ea"} 
            />
          </View>
          <Text className={`text-lg font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
            {isDarkMode ? 'Dark Mode' : 'Light Mode'}
          </Text>
        </View>
        
        <Switch
          trackColor={{ false: '#d1d5db', true: '#a855f7' }}
          thumbColor={isDarkMode ? '#f5f3ff' : '#ffffff'}
          ios_backgroundColor="#d1d5db"
          onValueChange={toggleTheme}
          value={isDarkMode}
        />
      </View>
      
      <Text className={`mt-1 ml-10 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
        {isDarkMode 
          ? 'Switch to light theme for a brighter interface' 
          : 'Switch to dark theme for low-light environments'}
      </Text>
    </View>
  );
};

export default ThemeToggleSwitch;
