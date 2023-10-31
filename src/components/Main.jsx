import React from "react";
import { View } from "react-native";
import AppBar from "./AppBar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RepositoriesList from "./RepositoriesList";
import LogInPage from "./pages/LogInPage";

const Stack = createNativeStackNavigator(); 

console.log('Main OK')
export default function Main() {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <Stack.Navigator>
        <Stack.Screen name="home"  component={RepositoriesList} />
        <Stack.Screen name="signin" component={LogInPage} />
      </Stack.Navigator>
    </View>
  );
}
