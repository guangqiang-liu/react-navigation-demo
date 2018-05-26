/**
 * Created by guangqiang on 2018/5/26.
 */
import React, {Component} from 'react'
import { Text, View} from 'react-native'
import {Button} from 'react-native-elements'
import { NavigationActions } from 'react-navigation'

export default class HookTabBar extends Component {

  render() {
    const {goBack} = this.props.navigation
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>这是测试pop事件中的第三个页面</Text>
          <Button
              buttonStyle={{marginVertical: 10}}
              title={'返回pop事件中的第一个页面'}
              onPress={() => goBack(2)}
          />
          <Button
              buttonStyle={{marginVertical: 10}}
              title={'返回到指定的页面'}
              onPress={() => goBack('Home')}
          />
        </View>
    )
  }
}