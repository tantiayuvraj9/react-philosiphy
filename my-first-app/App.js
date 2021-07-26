import React, {Component} from 'react'
import {Button, View, Text} from 'react-native'
class RedButton extends Component{
  render(){
    return(
      <Button color="red" title="kwjhkjfhkjd"/>
    )
  }
}
export default class App extends Component{
  render(){
    return(
      <View style={{marginTop:350}}>
      <RedButton/>
      <Text>ewfhkehfkfj</Text>
      </View>
    )
  }
}