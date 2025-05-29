import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { ProfileData } from '../context/ProfileContext';
import { useTheme } from '../context/ThemeContext';

type ProfileCardProps = {
  profile: ProfileData;
  editable?: boolean;
};

const ProfileCard: React.FC<ProfileCardProps> = ({ profile, editable = false }) => {
  const { isDarkMode } = useTheme();
  return (
    <View className={`rounded-xl p-6 mx-4 my-6 shadow-md ${
      isDarkMode ? 'bg-gray-800' : 'bg-pink-50'
    }`}>
      <View className="items-center">
        <View className="relative">
          <Image
            source={{ uri: profile.avatar }}
            className="w-32 h-32 rounded-full"
          />
          <View className={`absolute bottom-0 right-0 rounded-full p-1.5 ${
            isDarkMode ? 'bg-gray-700' : 'bg-white'
          }`}>
            <View className="rounded-full bg-green-500 p-1.5" />
          </View>
        </View>
        
        <Text className={`text-2xl font-bold mt-4 ${
          isDarkMode ? 'text-white' : 'text-gray-800'
        }`}>
          {profile.name}
        </Text>
        
        <View className="flex-row items-center mt-1 mb-3">
          <Ionicons name="location" size={16} color={isDarkMode ? "#9ca3af" : "#6b7280"} />
          <Text className={`ml-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            Quang Binh, Viet Nam
          </Text>
        </View>
        
        <Text className={`text-base text-center px-4 ${
          isDarkMode ? 'text-gray-300' : 'text-gray-600'
        }`}>
          {profile.bio}
        </Text>
        
        {editable && (
          <TouchableOpacity 
            className="mt-6 px-8 py-2.5 rounded-full bg-purple-500 active:bg-purple-600 flex-row items-center"
            onPress={() => router.push('/edit-profile')}
          >
            <Ionicons name="pencil" size={16} color="#ffffff" style={{ marginRight: 6 }} />
            <Text className="text-white font-medium">Edit Profile</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default ProfileCard;
