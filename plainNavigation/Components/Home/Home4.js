/**
 * Created by guangqiang on 2017/12/2.
 */
import React, {Component} from 'react'
import { Text, View} from 'react-native'
import {Button} from 'react-native-elements'
export default class Home4 extends Component {

  static navigationOptions = ({navigation, screenProps}) => ({
      title: 'Home4',
      headerRight: (
        <Button
          title={'自定义导航右按钮'}
          onPress={() => alert('rightBtn')}
        />
      )
    }
  )

  render() {
    const {goBack} = this.props.navigation
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Home4</Text>
        <Button
          title={'返回上一页面'}
          onPress={() => goBack()}
        />
      </View>
    )
  }
}