/**
 * Created by guangqiang on 2017/11/30.
 */
import React, {Component} from 'react'
import {Platform} from 'react-native'
import {TabNavigator} from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Home from '../Components/Home/Home'
import People from '../Components/People/People'
import Chat from '../Components/Chat/Chat'
import Setting from '../Components/Setting/Setting'

const RouteConfigs = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: 'Home',
      tabBarOnPress: () => {
        console.log('hookHome')
      },
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
      tabBarOnPress: () => {
        console.log('hookPeople')
      },
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
      tabBarOnPress: () => {
        alert('HookChatTab')
      },
      tabBarIcon: ({ focused, tintColor }) => (
        <Ionicons
          name={focused ? 'ios-chatboxes' : 'ios-chatboxes-outline'}
          size={26}
          style={{ color: tintColor }}/>
      )
    }),
  },
  Setting: {
    screen: Setting,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: 'Settings',
      tabBarOnPress: () => {
        console.log('hookHome')
      },
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
    activeTintColor: Platform.OS === 'ios' ? '#e91e63' : '#fff',
  },
}

const TabBar = TabNavigator(RouteConfigs, TabNavigatorConfigs)

export {TabBar}