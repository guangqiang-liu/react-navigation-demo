/**
 * Created by guangqiang on 2017/12/2.
 */
import React, {Component} from 'react'
import { Text, View} from 'react-native'
import {Button} from 'react-native-elements'
export default class Home7 extends Component {

  static navigationOptions = ({navigation, screenProps}) => ({
      title: navigation.state.params.title,
      headerRight: (
        <Button
          title={'changeTitle'}
          onPress={() => navigation.setParams({title: 'newTitle'})}
        />
      )
    }
  )

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Home7</Text>
      </View>
    )
  }
}