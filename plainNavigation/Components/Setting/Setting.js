/**
 * Created by guangqiang on 2017/12/1.
 */
import React, {Component} from 'react'
import { Text, View} from 'react-native'
import {Button} from 'react-native-elements'
class Setting extends Component {

  render() {
    const {navigate} = this.props.navigation
    return (
      <View>
        <Text>Setting</Text>
        <Button
          title={'跳转到Home5界面'}
          onPress={() => navigate('Home5')}
        />
      </View>
    )
  }
}


export default Setting