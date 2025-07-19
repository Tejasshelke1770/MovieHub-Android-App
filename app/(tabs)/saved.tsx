import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { icons } from "@/constants/icons";

const saved = () => {
  return (
    <View className="bg-primary flex-1">
      <View className="flex-1 flex items-center justify-center gap-5 flex-col ">
        <Image source={icons.save} className="size-10" tintColor="#FFF" />
        <Text className="text-gray-500 text-base">
          Saved Movies will Appear here
        </Text>
      </View>
    </View>
  );
};

export default saved;

const styles = StyleSheet.create({});
