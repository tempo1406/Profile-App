import { router } from "expo-router";
import { Formik } from "formik";
import React from "react";
import { Text, TextInput, View } from "react-native";
import * as Yup from "yup";
import Button from "../components/Button";
import Header from "../components/Header";
import ScreenContainer from "../components/ScreenContainer";
import { useProfile } from "../context/ProfileContext";
import { useTheme } from "../context/ThemeContext";

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .required("Name is required")
        .min(2, "Name must be at least 2 characters"),
    bio: Yup.string()
        .required("Bio is required")
        .min(10, "Bio must be at least 10 characters")
        .max(200, "Bio cannot exceed 200 characters"),
});

const EditProfileScreen = () => {
    const { profile, updateProfile } = useProfile();
    const { isDarkMode } = useTheme();
    return (
        <ScreenContainer>
            <Header title="Edit Profile" />
            <Formik
                initialValues={{
                    name: profile.name,
                    bio: profile.bio,
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    updateProfile({
                        name: values.name,
                        bio: values.bio,
                    });
                    router.back();
                }}
            >
                {({
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    values,
                    errors,
                    touched,
                }) => (
                    <View className="px-6 py-4">
                        <View className="mb-6">
                            <Text
                                className={`text-lg mb-1 font-medium ${
                                    isDarkMode ? "text-white" : "text-gray-700"
                                }`}
                            >
                                Name
                            </Text>
                            <TextInput
                                onChangeText={handleChange("name")}
                                onBlur={handleBlur("name")}
                                value={values.name}
                                placeholder="Your name"
                                className={`w-full px-4 py-3 rounded-lg ${
                                    isDarkMode
                                        ? "bg-gray-800 text-white border border-gray-700"
                                        : "bg-white text-gray-800 border border-gray-200"
                                }`}
                                placeholderTextColor={
                                    isDarkMode ? "#9ca3af" : "#9ca3af"
                                }
                            />
                            {touched.name && errors.name && (
                                <Text className="text-red-500 mt-1">
                                    {errors.name}
                                </Text>
                            )}
                        </View>
                        <View className="mb-6">
                            <Text
                                className={`text-lg mb-1 font-medium ${
                                    isDarkMode ? "text-white" : "text-gray-700"
                                }`}
                            >
                                Bio
                            </Text>
                            <TextInput
                                onChangeText={handleChange("bio")}
                                onBlur={handleBlur("bio")}
                                value={values.bio}
                                placeholder="Tell us about yourself"
                                multiline
                                numberOfLines={4}
                                textAlignVertical="top"
                                className={`w-full px-4 py-3 rounded-lg ${
                                    isDarkMode
                                        ? "bg-gray-800 text-white border border-gray-700"
                                        : "bg-white text-gray-800 border border-gray-200"
                                } min-h-[120px]`}
                                placeholderTextColor={
                                    isDarkMode ? "#9ca3af" : "#9ca3af"
                                }
                            />
                            {touched.bio && errors.bio && (
                                <Text className="text-red-500 mt-1">
                                    {errors.bio}
                                </Text>
                            )}
                        </View>
                        <View className="flex-row gap-4 mt-6">
                            <Button
                                title="Save Changes"
                                onPress={handleSubmit}
                                className="flex-1 mb-3"
                                icon="save-outline"
                            />
                            <Button
                                title="Cancel"
                                onPress={() => router.back()}
                                variant="secondary"
                                className="flex-1 mb-3"
                                icon="close-outline"
                            />
                        </View>
                    </View>
                )}
            </Formik>
        </ScreenContainer>
    );
};

export default EditProfileScreen;
