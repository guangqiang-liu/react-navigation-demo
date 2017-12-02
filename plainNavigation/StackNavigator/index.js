/**
 * Created by guangqiang on 2017/12/1.
 */
import React, {Component} from 'react'
import {StackNavigator} from 'react-navigation'
import {TabBar} from '../TabNavigator'
import Home2 from '../Components/Home/Home2'
import Home3 from '../Components/Home/Home3'
import Home4 from '../Components/Home/Home4'
import Home5 from '../Components/Home/Home5'
import Home6 from '../Components/Home/Home6'
import Home7 from '../Components/Home/Home7'
import Setting2 from '../Components/Setting/Setting2'
import Setting3 from '../Components/Setting/Setting3'
const RouteConfigs = {
  Home: {
    screen: TabBar
  },
  Home2: {
    screen: Home2,
    path:'app/Home2',
    navigationOptions: {
      title: '这是在RouteConfigs中设置的title',
      headerTitleStyle: {
        fontSize: 10
      }
    }
  },
  Home3: { screen: Home3 },
  Home4: { screen: Home4 },
  Home5: {screen: Home5},
  Home6: {screen: Home6},
  Home7: {screen: Home7},
  Setting2: {screen: Setting2},
  Setting3: {screen: Setting3},
}

const StackNavigatorConfig = {
  initialRouteName: 'Home',
  initialRouteParams: {initPara: '初始页面参数'},
  navigationOptions: {
    title: '标题',
    headerTitleStyle: {fontSize: 18, color: 'red'},
    headerStyle: {height: 49},
  },
  paths: 'page/main',
  mode: 'card',
  headerMode: 'screen',
  cardStyle: {backgroundColor: "#ffffff"},
  transitionConfig: (() => ({
  })),
  onTransitionStart: (() => {
    console.log('页面跳转动画开始')
  }),
  onTransitionEnd: (() => {
    console.log('页面跳转动画结束')
  }),
}

const Navigator = StackNavigator(RouteConfigs, StackNavigatorConfig)

export {Navigator}