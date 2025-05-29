import { Ionicons } from '@expo/vector-icons';
import React, { useRef } from 'react';
import { Animated, ScrollView, Text, View } from 'react-native';
import Header from '../components/Header';
import ProfileCard from '../components/ProfileCard';
import ScreenContainer from '../components/ScreenContainer';
import { useProfile } from '../context/ProfileContext';
import { useTheme } from '../context/ThemeContext';

const ProfileScreen = () => {
  const { profile } = useProfile();
  const { isDarkMode } = useTheme();
    
  const StatsItem = ({ icon, title, value }: { icon: string, title: string, value: string }) => (
    <View className={`p-4 flex-1 rounded-xl ${
      isDarkMode ? 'bg-gray-800' : 'bg-white'
    } items-center shadow-sm`}>
      <Ionicons name={icon as any} size={24} color={isDarkMode ? "#d1d5db" : "#4b5563"} />
      <Text className={`mt-2 text-xs font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
        {title}
      </Text>
      <Text className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
        {value}
      </Text>
    </View>
  );

  return (
    <ScreenContainer>
      <Header title="My Profile" />
      <ScrollView className="flex-1">
        <View className="items-center justify-center mb-6">
          <ProfileCard profile={profile} editable={true} />
        </View>
        
        <View className="px-4 mb-6">
          <Text className={`text-lg font-semibold mb-3 ${
            isDarkMode ? 'text-white' : 'text-gray-800'
          }`}>
            Profile Stats
          </Text>
          <View className="flex-row gap-3">
            <StatsItem 
              icon="time-outline" 
              title="Member Since" 
              value="2023" 
            />
            <StatsItem 
              icon="star-outline" 
              title="Rating" 
              value="4.9" 
            />
            <StatsItem 
              icon="people-outline" 
              title="Followers" 
              value="120" 
            />
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

export default ProfileScreen;
