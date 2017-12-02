/**
 * Created by guangqiang on 2017/12/2.
 */
import React, {Component} from 'react'
import { Text, View} from 'react-native'
import {Button} from 'react-native-elements'
export default class Home5 extends Component {

  static navigationOptions = ({navigation, screenProps}) => ({
      title: 'Home5',
      headerRight: (
        <Button
          title={'customAction'}
          onPress={() => navigation.state.params.customAction()}
        />
      )
    }
  )

  componentDidMount() {
    const {setParams} = this.props.navigation
    setParams({customAction: () => this.tempAction()})
  }

  tempAction() {
    alert('在导航栏按钮上调用Component内中的函数，因为static修饰的函数为静态函数，内部不能使用this')
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Home5</Text>
      </View>
    )
  }
}