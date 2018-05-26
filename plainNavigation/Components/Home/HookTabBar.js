/**
 * Created by guangqiang on 2018/5/26.
 */
import React, {Component} from 'react'
import { Text, View} from 'react-native'
export default class HookTabBar extends Component {

  render() {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Hook TabBar的点击事件，请点击Chat Tab已做参考</Text>
        </View>
    )
  }
}