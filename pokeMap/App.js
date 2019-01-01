import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Meteor, {createContainer,Accounts} from 'react-native-meteor';
import SignIn from './src/SignIn';
import PokeMap from './src/PokeMap';

const SERVER_URL = 'ws://192.168.86.20:3000/websocket';

export default class App extends React.Component {
  /**
   * life cycle compent, helps you do ceratin things like either like before or after or during some 
   * event in the react lifecyle 
   * componentWillMount 
   * we know the compnement will mount shortely (ms) 
   * want to do something before we start seeing stuff onscreen happens
   */
  state = {
    loggedIn: false
  }
  componentWillMount(){
    Meteor.connect(SERVER_URL);
    console.log(Meteor.userId())
    if(Meteor.userId()){
      this.flipLogin(true)
    }
  }
  flipLogin = (x) =>{
    this.setState({loggedIn: x});
  }
  signIn = (email, password) =>{
    Meteor.loginWithPassword(email, password, (error,data)=>{
      if(error){
        if(error.reason === "User not found"){
          console.log("there was no email");
          Accounts.createUser({email,password}, (error)=>{
            console.log(error);
          })
        }
      } else{
        console.log('email found');
        //TODO 
        this.flipLogin(true);
      }
    });
    console.log(Meteor.userId())
  }
  renderView = () =>{
    if(!this.state.loggedIn){
      return(
        <SignIn signIn={this.signIn}/>
      )
    }
    else {
      return(
        <PokeMap />
      )
    }
  }
  render() {
    return (
      <View style={styles.container}>
        {this.renderView()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
