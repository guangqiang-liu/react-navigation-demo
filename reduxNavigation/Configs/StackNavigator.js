/**
 * Created by guangqiang on 2017/12/1.
 */
import React from 'react'
import {StackNavigator} from 'react-navigation'
import {TabBar} from './TabNavigator'
import Counter from '../Components/Home/Counter'

const RouteConfigs = {
  Home: {
    screen: TabBar
  },
  Counter: {
    screen: Counter
  }
}

const StackNavigatorConfig = {
  initialRouteName: 'Home',
  initialRouteParams: {initPara: '初始页面参数'},
  navigationOptions: {
    title: '标题',
    headerTitleStyle: {fontSize: 17, color: 'orange'},
    headerStyle: {height: 49},
  },
  paths: 'page/main',
  mode: 'card',
  headerMode: 'screen',
  cardStyle: {backgroundColor: 'white'},
  transitionConfig: (() => ({
  })),
  onTransitionStart: (() => {
    console.log('页面跳转动画开始')
  }),
  onTransitionEnd: (() => {
    console.log('页面跳转动画结束')
  }),
}

const stackNavigator = StackNavigator(RouteConfigs, StackNavigatorConfig)

export default stackNavigator