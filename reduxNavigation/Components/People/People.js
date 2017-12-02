/**
 * Created by guangqiang on 2017/12/1.
 */
import React, {Component} from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native'
import {connect} from 'react-redux'

class People extends Component {

  componentDidMount() {
    const {params} = this.props.navigation.state
  }

  render() {
    return (
      <View>
        <Text>People</Text>
      </View>
    )
  }
}


const mapStateToProps = state => ({
  mainText: ''
})

export default connect(mapStateToProps)(People)