import React, {Component} from 'react'
import {View, Platform} from 'react-native'
import {Button} from 'react-native-elements'
import {StackNavigator} from 'react-navigation'
import {Navigator} from './plainNavigation/StackNavigator'
import OverallNavigation from './src/App'
import ReduxNavigation from './reduxNavigation'

const Index = ({ navigation }) => (
  <View style={{flex: 1, marginTop: 50}}>
    <Button
      buttonStyle={{marginVertical: 20}}
      title={'react-navigation导航组件的基本使用方式练习'}
      onPress={() => navigation.navigate('Demo1')}
    />
    <Button
      buttonStyle={{marginVertical: 20}}
      title={'react-navigation导航组件的抽屉等嵌套使用方式练习'}
      onPress={() => navigation.navigate('Demo2')}
    />
    <Button
      buttonStyle={{marginVertical: 20}}
      title={'react-navigation导航组件与Redux框架结合的使用练习'}
      onPress={() => navigation.navigate('Demo3')}
    />
  </View>
)

const RouteConfigs = {
  Index: {
    screen: Index
  },
  Demo1: {
    screen: Navigator
  },
  Demo2: {
    screen: OverallNavigation,
  },
  Demo3: {
    screen: ReduxNavigation
  }
}

const StackNavigatorConfig = {
  headerMode: 'none',
  mode: Platform.OS === 'ios' ? 'modal' : 'card'
}

const MainScreen = StackNavigator(RouteConfigs, StackNavigatorConfig)

export default MainScreen