/**
 * Created by guangqiang on 2017/12/1.
 */
import React from 'react'
import {Platform} from 'react-native'
import {TabNavigator} from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Home from '../Components/Home/Home'
import People from '../Components/People/People'
import Chat from '../Components/Chat/Chat'
import Settings from '../Components/Setting/Setting'

const RouteConfigs = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: 'Home',
      tabBarIcon: ({ focused, tintColor }) => (
        <Ionicons
          name={focused ? 'ios-home' : 'ios-home-outline'}
          size={26}
          style={{ color: tintColor }}/>
      )
    }),
  },
  People: {
    screen: People,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: 'People',
      tabBarIcon: ({ focused, tintColor }) => (
        <Ionicons
          name={focused ? 'ios-people' : 'ios-people-outline'}
          size={26}
          style={{ color: tintColor }}/>
      )
    }),
  },
  Chat: {
    screen: Chat,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: 'Chat',
      tabBarIcon: ({ focused, tintColor }) => (
        <Ionicons
          name={focused ? 'ios-chatboxes' : 'ios-chatboxes-outline'}
          size={26}
          style={{ color: tintColor }}/>
      )
    }),
  },
  Settings: {
    screen: Settings,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: 'Settings',
      tabBarIcon: ({ focused, tintColor }) => (
        <Ionicons
          name={focused ? 'ios-settings' : 'ios-settings-outline'}
          size={26}
          style={{ color: tintColor }}/>
      )
    }),
  }
}

const TabNavigatorConfigs = {
  initialRouteName: 'Home',
  lazy: true,
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? '#e91e63' : '#fff'
  },
}

const TabBar = TabNavigator(RouteConfigs, TabNavigatorConfigs)

export {TabBar}