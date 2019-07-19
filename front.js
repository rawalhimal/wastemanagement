import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Form, Item, Label, Input, Button } from "native-base";
import * as firebase from 'firebase';
//import console = require("console");
//import console = require("console");


class Front extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props){
      super(props);
      this.state={
          email:'',
          password:''
      }
    }
        signUp = (email,password)=>{
            firebase.auth().createUserWithEmailAndPassword(email,password)
        }
        logIn=(email,password)=>{
            firebase.auth().signInWithEmailAndPassword(email,password)
            .then(user=>{
                console.log(user)
            })
        }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputStyle}>
          <Form>
            
            <Item floatingLabel>
              <Label style={{ color: "black" }}>Email</Label>
              <Input autoCorrect={false} onChangeText={(email)=>this.setState({email})}/>
            </Item>
           
            <Item floatingLabel>
              <Label style={{ color: "black" }}>Password</Label>
              <Input autoCorrect={false} secureTextEntry  onChangeText={(password)=>this.setState({password})} />
            </Item>
            
            <Button
              block onPress={()=>this.signUp(this.state.email,this.state.password)}
              style={{
                marginTop: 15,
                justifyContent: "center",
                alignItems: "center"
                // marginLeft: "40%"
              }}
            >
                
              <Text>Register</Text>
            </Button>
            <Button
              block onPress={()=>this.signUp(this.state.email,this.state.password)}
              style={{
                marginTop: 15,
                justifyContent: "center",
                alignItems: "center"
                // marginLeft: "40%"
              }}
            >
                
              <Text>Login</Text>
            </Button>
          </Form>
        </View>
      </View>
    );
  }
}
export default Front;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(108, 122, 137)"
  },
  main: {
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "white",
    width: "100%",
    height: 350
  },
  inputStyle: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    margin: 10
  }
});