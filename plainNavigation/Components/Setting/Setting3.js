/**
 * Created by guangqiang on 2017/12/1.
 */
import React, {Component} from 'react'
import { Text, View} from 'react-native'
import {Button} from 'react-native-elements'
export default class Setting3 extends Component {

  render() {
    const {navigate} = this.props.navigation
    return (
      <View>
        <Text>Setting3</Text>
        <Button
          title={'跳转到Setting界面'}
          onPress={() => navigate('Setting')}
        />
      </View>
    )
  }
}