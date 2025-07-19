import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { icons } from "@/constants/icons";

const profile = () => {
  return (
    <View className="bg-primary flex-1 ">
      <View className="flex flex-1 items-center justify-center gap-5 flex-col ">
        <Image source={icons.person} className="size-10" tintColor="#FFF" />
        <Text className="text-gray-500 text-base">Profile</Text>
      </View>
    </View>
  );
};

export default profile;

const styles = StyleSheet.create({});
