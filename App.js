import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import FbScreen from './screens/FbScreen';
import InScreen from './screens/InScreen';

export default class App extends React.Component {
  render() {
    return (

      <AppContainer />

    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Fb: { screen: FbScreen },
  In: { screen: InScreen },
},
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: () => {
        const routeName = navigation.state.routeName;
        if (routeName === "Fb") {
          return (
            <Image
              source={require("./assets/FB.jpg")}
              style={{ width: 40, height: 40 }}
            />
          )

        }
        else if (routeName === "In") {
          return (
            <Image
              source={require("./assets/IN.jpg")}
              style={{ width: 40, height: 40 }}
            />)

        }
      }
    })
  }
);

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});