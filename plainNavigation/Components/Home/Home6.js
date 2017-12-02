/**
 * Created by guangqiang on 2017/12/2.
 */
import React, {Component} from 'react'
import { Text, View} from 'react-native'
import {Button} from 'react-native-elements'
export default class Home6 extends Component {

  static navigationOptions = ({navigation, screenProps}) => ({
      title: 'Home6'
  })

  render() {
    const {state, goBack} = this.props.navigation
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Home6</Text>
        <Button
          title={'回调传参'}
          onPress={() => {
            state.params.callback && state.params.callback('这是回调参数')
            goBack()
          }}
        />
      </View>
    )
  }
}