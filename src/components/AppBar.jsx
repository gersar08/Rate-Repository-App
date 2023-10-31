import React from 'react';
import { View, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';
import StyledText from './StyledText';
import theme from '../theme';

const styles = {
  container: {
    backgroundColor: theme.AppBar.primary,
    flexDirection: 'row',
    paddingTop: Constants.statusBarHeight + 10,
    paddingLeft: 10,
  },
  text: {
    color: theme.AppBar.secondary,
    paddingHorizontal: 10,
  },
  scroll: {
    paddingBottom: 15,
  },
};

const AppBarTab = ({ active, children, to }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{ marginRight: 20 }}
      onPress={() => navigation.navigate(to)}
    >
      <StyledText style={{ fontWeight: active ? 'bold' : 'normal', ...styles.text }}>
        {children}
      </StyledText>
    </TouchableOpacity>
  );
};

const AppBar = () => { 
  console.log('AppBar OK')
  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scroll}>
        <AppBarTab to="home">Repositories</AppBarTab>
        <AppBarTab to="signin">Sign in</AppBarTab>
      </ScrollView>
    </View>
  );
};

export default AppBar;
