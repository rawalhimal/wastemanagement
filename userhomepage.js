import React, { Component } from "react";


import { StyleSheet, View, TextInput,  Text, Alert,TouchableOpacity } from "react-native";
import { Button } from "native-base";

export default class UserHomePage extends Component {
  static navigationOptions = {
    title:"Inform to Muncipality"
  };
  constructor() {
    super();

    this.state = {
      Username: "",
      Useraddress: "",
      Userphonenumber: "",
      Currentdate:"",
     
    };
  }
  
 
UserRegistrationFunction=()=> {
  
  fetch('http://192.168.208.2/user/InsertUserData.php', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
  
      u_name: this.state.Username,
  
      u_address: this.state.Useraddress,
  
      uphone_number: this.state.Userphonenumber,
      u_current_date:this.state.Currentdate,
     
    })
  
  }).then((response) => response.json())
        .then((responseJson) => {
       
        Alert.alert(responseJson);
      
  // Showing response message coming from server after inserting records.
        
  
        }).catch((error) => {
          console.error(error);
        });
        
 
}






  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={styles.title}>Inform Form</Text>

        <TextInput
          placeholder="Enter Name"
          //onChangeText={name => this.setState({ UserName: name })}
       
          onChangeText={ u_name => this.setState({ Username: u_name}) }
         
          underlineColorAndroid="transparent"
          style={styles.TextInputStyleClass}
        />

        <TextInput
          placeholder="Enter address"
         // onChangeText={address => this.setState({ Useraddres: address })}
         onChangeText={ u_address => this.setState({ Useraddress:u_address}) }
       
          underlineColorAndroid="transparent"
          style={styles.TextInputStyleClass}
        />

        <TextInput
          placeholder="Enter phone Number"
          //onChangeText={email => this.setState({ Useremail: email })}
          onChangeText={ uphone_number => this.setState({Userphonenumber : uphone_number }) }
          underlineColorAndroid="transparent"
          style={styles.TextInputStyleClass}
          //secureTextEntry={true}
        />
         <TextInput
          placeholder="Enter current date and time"
          //onChangeText={email => this.setState({ Useremail: email })}
          onChangeText={ u_current_date => this.setState({Currentdate : u_current_date }) }
          underlineColorAndroid="transparent"
          style={styles.TextInputStyleClass}
          //secureTextEntry={true}
        />

        

{/* 
        <Button
          title="Complain"
          onPress={this.UserRegistrationFunction}
          color="#2196F3"
        /> 
        <Text></Text>
  <Button
          title="see the complain"
          onPress={()=>this.props.navigation.navigate('FetchComplain')}
          color="#2196F3"
        />  */}
        <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                margin: 10
              }}
            >
              <Button
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  height: 45,
                  marginLeft: 10,
                  backgroundColor: "#0000FF",
                  borderRadius: 20
                }}
                onPress={this.UserRegistrationFunction}
              >
               
                  <Text> </Text>
                  <Text style={{ fontSize: 30, color: "#e3f2fd" }}>
                    Inform
                  </Text>
               
              </Button>
            </View>
  </View>
      
    );
      
     
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: "center",
    flex: 1,
    margin: 10
  },

  TextInputStyleClass: {
    textAlign: "center",
    marginBottom: 7,
    height:60,
    borderWidth: 1,
    borderColor: "red",
    
    borderRadius: 10,
    color: "black"
  },

  title: {
    fontSize: 50,
    color: "#0000FF",
   
    textAlign: "center",
    marginBottom: 15
  },
  TouchableOpacityStyle: {
 
    paddingTop:10,
    paddingBottom:10,
    borderRadius:5,
    marginBottom:7,
    width: '100%',
    backgroundColor: 'pink'
 
  },
 
  TextStyle:{
    color:'red',
    textAlign:'center',
  },
 
});