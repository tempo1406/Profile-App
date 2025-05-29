import React, { createContext, useContext, useState } from 'react';

export type ProfileData = {
  name: string;
  bio: string;
  avatar: string;
};

type ProfileContextType = {
  profile: ProfileData;
  updateProfile: (data: Partial<ProfileData>) => void;
};

const initialProfile: ProfileData = {
  name: 'Ngoc Toan',
  bio: 'I am a React Native developer who loves building beautiful mobile apps.',
  avatar: 'https://nld.mediacdn.vn/291774122806476800/2023/12/2/2023-12-01t204124z1450407492rc2l8y9hxpsvrtrmadp3soccer-argentina-messi-1701493931314227286312.jpg',
};

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export const ProfileProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [profile, setProfile] = useState<ProfileData>(initialProfile);

  const updateProfile = (data: Partial<ProfileData>) => {
    setProfile(prev => ({ ...prev, ...data }));
  };

  return (
    <ProfileContext.Provider value={{ profile, updateProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
};
