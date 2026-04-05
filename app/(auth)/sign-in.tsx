import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const signIn = () => {
  return (
    <View>
      <Text>SignIn</Text>
      <Link href="/(auth)/sign-up">Sign Up</Link>
    </View>
  );
};

export default signIn;
