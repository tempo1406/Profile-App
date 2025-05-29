import { Ionicons } from '@expo/vector-icons';
import { router, usePathname } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../context/ThemeContext';

type HeaderProps = {
  title: string;
  showBackButton?: boolean;
};

const Header: React.FC<HeaderProps> = ({ title, showBackButton = true }) => {
  const { isDarkMode } = useTheme();
  const pathname = usePathname();
  
  const isHome = pathname === '/';
  
  return (
    <View className={`px-4 py-3 flex-row items-center ${
      isDarkMode ? 'bg-gray-900' : 'bg-blue-50'
    }`}>
      {showBackButton && !isHome && (
        <TouchableOpacity 
          onPress={() => router.back()} 
          className="mr-3 p-1"
        >
          <Ionicons 
            name="arrow-back" 
            size={24} 
            color={isDarkMode ? '#ffffff' : '#333333'} 
          />
        </TouchableOpacity>
      )}
      
      <Text className={`text-xl font-bold ${
        isDarkMode ? 'text-white' : 'text-gray-800'
      }`}>
        {title}
      </Text>
      
      {isHome && (
        <TouchableOpacity 
          onPress={() => router.push('/settings')}
          className="ml-auto p-1"
        >
          <Ionicons 
            name="settings-outline" 
            size={24} 
            color={isDarkMode ? '#ffffff' : '#333333'} 
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;
