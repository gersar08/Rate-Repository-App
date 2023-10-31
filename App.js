import React from "react";
import Main from "./src/components/Main.jsx";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { ApolloProvider } from "@apollo/client";
import createApolloClient from "./src/utils/apolloclient.js";

const apolloClient = createApolloClient()
console.log('App OK')

export default function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <StatusBar style="light">
        <NavigationContainer>
          <Main />
        </NavigationContainer>
      </StatusBar>
    </ApolloProvider>
  )
}