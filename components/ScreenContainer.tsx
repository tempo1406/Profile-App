import React, { ReactNode } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import GradientBackground from './GradientBackground';

type ScreenContainerProps = {
  children: ReactNode;
  scrollable?: boolean;
};

const ScreenContainer: React.FC<ScreenContainerProps> = ({ 
  children,
  scrollable = true 
}) => {
  const { isDarkMode } = useTheme();
  
  const Container = scrollable ? ScrollView : View;

  return (
    <SafeAreaView className="flex-1">
      <GradientBackground>
        <Container className="flex-1">
          {children}
        </Container>
      </GradientBackground>
    </SafeAreaView>
  );
};

export default ScreenContainer;
