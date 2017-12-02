/**
 * Created by guangqiang on 2017/12/1.
 */
import React, {Component} from 'react'
import { Text, View} from 'react-native'
import {connect} from 'react-redux'
import {Button} from 'react-native-elements'
import {changeStateValue} from '../../Actions/Home'
class Home extends Component {

  render() {
    const {navigate, dispatch} = this.props.navigation
    return (
      <View>
        <Text>Home</Text>
        <Text style={{marginVertical: 30, color: 'red'}}>{this.props.reduxValue}</Text>
        <Button
          buttonStyle={{marginVertical: 10}}
          title={'修改reducer中初始的值'}
          onPress={() => dispatch(changeStateValue('通过redux修改的value值'))}
        />
        <Button
          buttonStyle={{marginVertical: 10}}
          title={'ReduxDemo1-Counter计算器'}
          onPress={() => navigate('Counter')}
        />
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    reduxValue: state.home.home.homeState
  }
}

export default connect(mapStateToProps)(Home)