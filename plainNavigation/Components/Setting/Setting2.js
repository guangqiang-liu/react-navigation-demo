/**
 * Created by guangqiang on 2017/12/1.
 */
import React, {Component} from 'react'
import { Text, View} from 'react-native'
import {Button} from 'react-native-elements'
export default class Setting2 extends Component {

  render() {
    const {navigate} = this.props.navigation
    return (
      <View>
        <Text>Setting2</Text>
        <Button
          title={'跳转到Setting3界面'}
          onPress={() => navigate('Setting3')}
        />
      </View>
    )
  }
}