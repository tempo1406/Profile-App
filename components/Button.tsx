import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../context/ThemeContext';

type ButtonProps = {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
  loading?: boolean;
  icon?: string;
};

const Button: React.FC<ButtonProps> = ({ 
  title, 
  onPress, 
  variant = 'primary',
  className = '',
  loading = false,
  icon
}) => {
  const { isDarkMode } = useTheme();
  
  const getButtonStyle = () => {
    if (variant === 'primary') {
      return isDarkMode ? 'bg-purple-600 active:bg-purple-700' : 'bg-purple-500 active:bg-purple-600';
    }
    return isDarkMode 
      ? 'bg-gray-700 border border-gray-600 active:bg-gray-800' 
      : 'bg-white border border-gray-300 active:bg-gray-100';
  };
  
  const getTextStyle = () => {
    if (variant === 'primary') {
      return 'text-white';
    }
    return isDarkMode ? 'text-white' : 'text-gray-700';
  };

  const getIconColor = () => {
    if (variant === 'primary') {
      return 'white';
    }
    return isDarkMode ? 'white' : '#4b5563';
  };
  return (
    <TouchableOpacity 
      onPress={loading ? undefined : () => onPress()}
      disabled={loading}
      className={`px-6 py-3 rounded-full ${getButtonStyle()} ${className}`}
    >
      <View className="flex-row items-center justify-center">
        {loading ? (
          <ActivityIndicator 
            size="small" 
            color={variant === 'primary' ? 'white' : (isDarkMode ? 'white' : '#4b5563')} 
            style={{ marginRight: 10 }} 
          />
        ) : icon ? (
          <Ionicons 
            name={icon as any} 
            size={18} 
            color={getIconColor()} 
            style={{ marginRight: 8 }} 
          />
        ) : null}
        
        <Text className={`text-center font-medium ${getTextStyle()}`}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
