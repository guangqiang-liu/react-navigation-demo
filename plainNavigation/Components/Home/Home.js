/**
 * Created by guangqiang on 2017/12/1.
 */
import React, {Component} from 'react'
import { Text, View, ScrollView} from 'react-native'
import {Button} from 'react-native-elements'
class Home extends Component {

  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView>
          <Text>Home</Text>
          <Button
            buttonStyle={{marginVertical: 10}}
            title={'跳转到Home2界面'}
            onPress={() => this.props.navigation.navigate('Home2')}
          />
          <Button
            buttonStyle={{marginVertical: 10}}
            title={'跳转到Home3界面，并传递参数'}
            onPress={() => this.props.navigation.navigate('Home3', {id: 123})}
          />
          <Button
            buttonStyle={{marginVertical: 10}}
            title={'跳转到Home4界面，单独设置导航栏内容'}
            onPress={() => this.props.navigation.navigate('Home4')}
          />
          <Button
            buttonStyle={{marginVertical: 10}}
            title={'跳转到Home5界面，使用导航按钮自定义事件'}
            onPress={() => this.props.navigation.navigate('Home5')}
          />
          <Button
            buttonStyle={{marginVertical: 10}}
            title={'跳转到Home6界面，回调传参'}
            onPress={() => this.props.navigation.navigate('Home6',{callback: (response) => alert(response)})}
          />
          <Button
            buttonStyle={{marginVertical: 10}}
            title={'跳转到Home7界面，使用SetParams修改导航标题'}
            onPress={() => this.props.navigation.navigate('Home7', {title: 'oldTitle'})}
          />
          <Button
            buttonStyle={{marginVertical: 10}}
            title={'跳转到Setting2界面'}
            onPress={() => this.props.navigation.navigate('Setting2')}
          />
        </ScrollView>
      </View>
    )
  }
}

export default Home