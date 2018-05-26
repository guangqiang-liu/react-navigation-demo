/**
 * Created by guangqiang on 2017/12/1.
 */
import React, {Component} from 'react'
import {Text} from 'react-native'
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
import HookTabBar from '../Components/Home/HookTabBar'
import Badge from  '../Components/Home/Badge'
import Back1 from '../Components/Home/Back1'
import Back2 from '../Components/Home/Back2'
import Back3 from '../Components/Home/Back3'

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
      },
      headerLeft: (
          <Text>自定义按钮</Text>
      )
    }
  },
  Home3: { screen: Home3 },
  Home4: { screen: Home4 },
  Home5: {screen: Home5},
  Home6: {screen: Home6},
  Home7: {screen: Home7},
  Setting2: {screen: Setting2},
  Setting3: {screen: Setting3},
  HookTabBar: {screen: HookTabBar},
  Badge: {screen: Badge},
  Back1: {screen: Back1},
  Back2: {screen: Back2},
  Back3: {screen: Back3},

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

const defaultStateAction = Navigator.router.getStateForAction;

Navigator.router.getStateForAction = (action, state) => {
  if (state && action.key && action.type === 'Navigation/BACK') {
    const desiredRoute = state.routes.find((route) => route.routeName === action.key)
    if (desiredRoute) {
      const index = state.routes.indexOf(desiredRoute)
      const finalState = {
        ...state,
        routes: state.routes.slice(0, index + 1),
        index: index,
      };
      return finalState
    } else {
      if (state.routes.length > action.key) {
        const stacksLength = state.routes.length - action.key
        const stacks = state.routes.slice(0, stacksLength)
        const finalState = {
          ...state,
          routes: stacks,
          index: stacksLength - 1,
        };
        return finalState
      }
    }
  }
  return defaultStateAction(action, state)
}

export {Navigator}