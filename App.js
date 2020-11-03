import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './components/HomeScreen';
// import InvoiceEditScreen from './components/InvoiceEditScreen';
// import SummaryScreen from './components/SummaryScreen';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    // InvoiceEdit: InvoiceEditScreen,
    // Summary: SummaryScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    const Layout = createAppContainer(RootStack);
    return (
      // <View style={styles.container}>
      //   <Text>Open up App.js to start working on your app!</Text>
      //   <StatusBar style='auto' />
      // </View>
      <Layout />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
