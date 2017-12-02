/**
 * Created by guangqiang on 2017/12/2.
 */
import React, {Component} from 'react'
import { Text, View} from 'react-native'
import {connect} from 'react-redux'
import {Button} from 'react-native-elements'
import {increaseAction, decreaseAction} from '../../Actions/Counter'
class Counter extends Component {

  static navigationOptions = () => ({
    title: 'Counter加减计数器'
  })

  render() {
    const {dispatch} = this.props.navigation
    return (
      <View>
        <Text>Counter</Text>
        <Text style={{marginVertical: 20, color: 'red', fontSize: 30}}>{this.props.counterValue}</Text>
        <Button
          buttonStyle={{marginVertical: 10}}
          title={'+'}
          onPress={() => dispatch(increaseAction())}
        />
        <Button
          buttonStyle={{marginVertical: 10}}
          title={'-'}
          onPress={() => dispatch(decreaseAction())}
        />
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    counterValue: state.home.counter.counterValue
  }
}

export default connect(mapStateToProps)(Counter)