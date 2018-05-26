/**
 * Created by guangqiang on 2017/11/30.
 */
import React, {Component} from 'react'
import {Platform, Alert, View, Text} from 'react-native'
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
          <View style={{position: 'absolute', top: -10}}>
            <Ionicons
                name={focused ? 'ios-people' : 'ios-people-outline'}
                size={26}
                style={{ color: tintColor }}/>
            <View style={{backgroundColor: 'red', position: 'absolute', right: -10, top: -5, height: 15, width: 20, borderRadius: 8, overflow: 'hidden'}}>
              <Text style={{fontSize: 12, textAlign: 'center'}}>10</Text>
            </View>
          </View>
      )
    }),
  },
  Chat: {
    screen: Chat,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: 'Chat',
      tabBarOnPress: () => {
        Alert.alert(
            '注意！',
            '这里做了hook tabBar的点击事件操作，我们可以hook到这个点击事件，处理我们想要处理的业务后再打开 Chat这个页面',
            [
              {text: '打开tab页面', onPress: () => navigation.navigate('Chat')},
              {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            ],
            { cancelable: false }
        )
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
      tabBarIcon: ({ focused, tintColor }) => (
        <Ionicons
          name={focused ? 'ios-settings' : 'ios-settings-outline'}
          size={26}
          style={{ color: tintColor }}/>
      )
    })
  }
}

const TabNavigatorConfigs = {
  initialRouteName: 'Home',
  lazy: true,
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? '#e91e63' : '#fff',
  }
}

const TabBar = TabNavigator(RouteConfigs, TabNavigatorConfigs)

export {TabBar}