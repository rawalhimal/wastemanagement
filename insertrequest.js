import React, { Component } from "react";


import { StyleSheet, View, TextInput,  Text, Alert,TouchableOpacity } from "react-native";
import { Button } from "native-base";

export default class Request extends Component {
  static navigationOptions = {
    title:"Request to Muncipality"
  };
  constructor() {
    super();

    this.state = {
     
      Requestaddress: "",
      OdaNumber:"",
      
     
    };
  }
  
 
UserRegistrationFunction=()=> {
  
  fetch('http://192.168.208.2/userrequest/insertrequest.php', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
  
      
    request_address: this.state.Requestaddress,
    oda_number:this.state.OdaNumber,
      
     
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
        <Text style={styles.title}>Request Form</Text>
       
         <TextInput
          placeholder="address of request house"
          //onChangeText={email => this.setState({ Useremail: email })}
          onChangeText={ request_address => this.setState({Requestaddress : request_address }) }
          underlineColorAndroid="transparent"
          style={styles.TextInputStyleClass}
          //secureTextEntry={true}
        />
         <TextInput
          placeholder="enter Oda number"
          //onChangeText={email => this.setState({ Useremail: email })}
          onChangeText={ oda_number => this.setState({OdaNumber : oda_number }) }
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
                  backgroundColor: "green",
                  borderRadius: 20
                }}
                onPress={this.UserRegistrationFunction}
              >
               
                  <Text> </Text>
                  <Text style={{ fontSize: 30, color: "#e3f2fd" }}>
                    Request
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
    borderColor: "green",
    
    borderRadius: 10,
    color: "black"
  },

  title: {
    fontSize: 50,
    color: "green",
    textAlign: "center",
    marginBottom: 15,
    
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