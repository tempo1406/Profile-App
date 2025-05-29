import React from "react";
import { StyleSheet, View } from "react-native";
import { useTheme } from "../context/ThemeContext";

type GradientBackgroundProps = {
    children: React.ReactNode;
};

const GradientBackground: React.FC<GradientBackgroundProps> = ({
    children,
}) => {
    const { isDarkMode } = useTheme();

    return (
        <View className={`flex-1 ${isDarkMode ? "bg-gray-900" : "bg-blue-50"}`}>
            <View
                className={`absolute top-0 right-0 w-60 h-60 rounded-full opacity-20 ${
                    isDarkMode ? "bg-purple-900" : "bg-purple-300"
                }`}
                style={{ transform: [{ translateX: 20 }, { translateY: -20 }] }}
            />

            <View
                className={`absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-20 ${
                    isDarkMode ? "bg-blue-900" : "bg-blue-200"
                }`}
                style={{ transform: [{ translateX: -40 }, { translateY: 40 }] }}
            />
            <View
                className={`absolute top-0 left-0 w-40 h-40 rounded-full opacity-20 ${
                    isDarkMode ? "bg-pink-900" : "bg-pink-300"
                }`}
                style={{ transform: [{ translateX: -20 }, { translateY: 20 }] }}
            />
            {children}
        </View>
    );
};

export default GradientBackground;
