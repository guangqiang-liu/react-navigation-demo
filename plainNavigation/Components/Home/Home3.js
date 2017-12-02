/**
 * Created by guangqiang on 2017/12/2.
 */
import React, {Component} from 'react'
import { Text, View} from 'react-native'
import {Button} from 'react-native-elements'
export default class Home3 extends Component {

  render() {
    const {navigate} = this.props.navigation
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Home3</Text>
        <Text style={{marginVertical: 20}}>{`Home界面传递的参数为：${this.props.navigation.state.params.id}`}</Text>
        <Button
          buttonStyle={{marginVertical: 10}}
          title={'跳转到Home4界面'}
          onPress={() => navigate('Home4')}
        />
      </View>
    )
  }
}