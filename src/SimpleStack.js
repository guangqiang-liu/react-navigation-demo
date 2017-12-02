import React from 'react'
import { Button, Text } from 'react-native'
import { StackNavigator, SafeAreaView } from 'react-navigation'

/** renderView **/

const MyNavScreen = ({ navigation, banner }) => (
  <SafeAreaView>
    <Text style={{backgroundColor: 'red'}}>{banner}</Text>
    <Button
      onPress={() => navigation.navigate('Profile', { name: 'Jane' })}
      title="Go to a profile screen"
    />
    <Button
      onPress={() => navigation.navigate('Photos', { name: 'Jane' })}
      title="Go to a photos screen"
    />
    <Button onPress={() => navigation.goBack(null)} title="Go back" />
  </SafeAreaView>
)

/** 绘制Scene **/

const MyHomeScreen = ({ navigation }) => (
  <MyNavScreen banner="Home Screen" navigation={navigation} />
)

const MyProfileScreen = ({ navigation }) => (
  <MyNavScreen
    banner={`${navigation.state.params.mode === 'edit'
      ? 'Now Editing ' : ''}${navigation.state.params.name}'s Profile`}
    navigation={navigation}
  />
)

const MyPhotosScreen = ({ navigation }) => (
  <MyNavScreen
    banner={`${navigation.state.params.name}'s Photos`}
    navigation={navigation}
  />
)

/** 配置导航的属性 **/

MyHomeScreen.navigationOptions = {
  title: 'Welcome',
}

MyPhotosScreen.navigationOptions = {
  title: 'Photos',
}

MyProfileScreen.navigationOptions = props => {
  const { navigation } = props
  const { state, setParams } = navigation
  const { params } = state
  return {
    headerTitle: `${params.name}'s Profile!`,
    // Render a button on the right side of the header.
    // When pressed switches the screen to edit mode.
    headerRight: (
      <Button
        title={params.mode === 'edit' ? 'Done' : 'Edit'}
        onPress={() =>
          setParams({ mode: params.mode === 'edit' ? '' : 'edit' })}
      />
    )
  }
}

const SimpleStack = StackNavigator({
  Home: {
    screen: MyHomeScreen,
  },
  Profile: {
    path: 'people/:name',
    screen: MyProfileScreen,
  },
  Photos: {
    path: 'photos/:name',
    screen: MyPhotosScreen,
  }
})

export default SimpleStack