import { icons } from "@/constants/icons";
import React from "react";
import { Image, StyleSheet, TextInput, View } from "react-native";

interface Props {
  onPress?: () => void;
  placeHolder?: string;
  onChangeText?: (text: string) => void;
  value?: string;
}

const SearchBar = ({ onPress, placeHolder, onChangeText, value }: Props) => {
  return (
    <View className="flex-row gap-2 items-center bg-dark-200 rounded-full px-5 py-4">
      <Image
        source={icons.search}
        className="size-5 "
        resizeMode="contain"
        tintColor="#ab8bff"
      />
      <TextInput
        onPress={onPress}
        placeholder={placeHolder}
        placeholderTextColor="#a8b5db"
        className="flex-1 text-white"
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({});
