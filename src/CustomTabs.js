import React from 'react'
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native'

import {
  createNavigator,
  createNavigationContainer,
  SafeAreaView,
  TabRouter,
  addNavigationHelpers,
} from 'react-navigation'

import SampleText from './SampleText'

const MyNavScreen = ({ navigation, banner }) => (
  <ScrollView>
    <SafeAreaView forceInset={{ horizontal: 'always' }}>
      <SampleText>{banner}</SampleText>
      <Button
        title="Go back"
        onPress={() => {navigation.goBack(null)}}
      />
    </SafeAreaView>
  </ScrollView>
)

const MyHomeScreen = ({ navigation }) => (
  <MyNavScreen banner="Home Screen" navigation={navigation} />
)

const MyNotificationsScreen = ({ navigation }) => (
  <MyNavScreen banner="Notifications Screen" navigation={navigation} />
)

const MySettingsScreen = ({ navigation }) => (
  <MyNavScreen banner="Settings Screen" navigation={navigation} />
)

/** TabBar **/
const CustomTabBar = ({ navigation }) => {
  const { routes } = navigation.state
  return (
    <SafeAreaView style={styles.tabContainer}>
      {routes.map(route => (
        <TouchableOpacity
          onPress={() => navigation.navigate(route.routeName)}
          style={styles.tab}
          key={route.routeName}
        >
          <Text>{route.routeName}</Text>
        </TouchableOpacity>
      ))}
    </SafeAreaView>
  )
}

/** tabBar View **/
const CustomTabView = ({ router, navigation }) => {
  const { routes, index } = navigation.state
  const ActiveScreen = router.getComponentForRouteName(routes[index].routeName)
  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <CustomTabBar navigation={navigation} />
      <ActiveScreen
        navigation={addNavigationHelpers({
          dispatch: navigation.dispatch,
          state: routes[index],
        })}
      />
    </SafeAreaView>
  )
}

/** router **/
const CustomTabRouter = TabRouter(
  {
    Home: {
      screen: MyHomeScreen,
      path: '',
    },
    Notifications: {
      screen: MyNotificationsScreen,
      path: 'notifications',
    },
    Settings: {
      screen: MySettingsScreen,
      path: 'settings',
    },
  }, {
    // Change this to start on a different tab
    initialRouteName: 'Home',
  }
);

const CustomTabs = createNavigationContainer(
  createNavigator(CustomTabRouter)(CustomTabView)
)

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    height: 48,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 4,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    backgroundColor: 'red'
  },
})

export default CustomTabs