/**
 * Created by guangqiang on 2017/12/1.
 */
import React, {Component} from 'react'
import { Text, View} from 'react-native'

class People extends Component {

  static navigationOptions = {
    title: 'People', // 固定标题
  }
  render() {
    return (
      <View>
        <Text>People</Text>
      </View>
    )
  }
}

export default People