/**
 * Created by guangqiang on 2018/5/26.
 */
import React, {Component} from 'react'
import { Text, View} from 'react-native'
import {Button} from 'react-native-elements'
export default class badge extends Component {

  render() {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>实现在TabBar Item上自定义badge，我们可以参照示例中的People Tab的实现方式</Text>
        </View>
    )
  }
}