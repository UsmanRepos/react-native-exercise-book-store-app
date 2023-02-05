import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { NavigationContainer, DefaultTheme } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { COLORS, icons } from '../constants'
import { Home, BookDetails } from '../screens'

const stack = createNativeStackNavigator();
const tab = createBottomTabNavigator();



const tabsScreen = () => {

  return (
    <tab.Navigator
      tabBarOptions={{ showLabel: false }}
      screenOptions={({ route }) => ({
        headerShown:false,
        tabBarStyle: { backgroundColor: COLORS.black },
        tabBarIcon: ({ focused }) => {
          const tintColor = focused ? COLORS.white : COLORS.gray;

          switch (route.name) {
            case "home":
              return (
                <Image
                  source={icons.dashboard_icon}
                  resizeMode='contain'
                  style={{
                    tintColor: tintColor,
                    width: 25,
                    height: 25,
                  }}
                />
              )
            case "search":
              return (
                <Image
                  source={icons.search_icon}
                  resizeMode='contain'
                  style={{
                    tintColor: tintColor,
                    width: 25,
                    height: 25,
                  }}
                />
              )
            case "notification":
              return (
                <Image
                  source={icons.notification_icon}
                  resizeMode='contain'
                  style={{
                    tintColor: tintColor,
                    width: 25,
                    height: 25,
                  }}
                />
              )
            case "setting":
              return (
                <Image
                  source={icons.menu_icon}
                  resizeMode='contain'
                  style={{
                    tintColor: tintColor,
                    width: 25,
                    height: 25,
                  }}
                />
              )
          }
        }
      })}
    >
      <tab.Screen
        name="home"
        component={Home}
      />
      <tab.Screen
        name="search"
        component={Home}
      />
      <tab.Screen
        name="notification"
        component={Home}
      />
      <tab.Screen
        name="setting"
        component={Home}
      />
    </tab.Navigator>
  )
}
const stackScreen = () => (
  <stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName='home'
  >
    <stack.Screen
      name="home"
      component={tabsScreen}
    />
    <stack.Screen
      name="bookDetail"
      component={BookDetails}
    />
  </stack.Navigator>
)

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent",
  },

};
const Index = () => {
  return (
    <NavigationContainer theme={theme}>
      {stackScreen()}
    </NavigationContainer>
  );
};

export default Index;

const styles = StyleSheet.create({});
