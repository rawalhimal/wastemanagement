import React from "react";
import { Text, View, ImageBackground,StyleSheet,TouchableOpacity,Image,TextInput, TouchableHighlight,Alert} from "react-native";
import { Button } from "native-base";

const myBackground = require("../assets/home.jpg");
export default class Log extends React.Component {
  static navigationOptions={
    header:null
  }
  constructor(props) {
 
    super(props)
 
    this.state = {
 
      Userno: '',
      UserPassword: ''
 
    }
 
  }
 
UserLoginFunction = () =>{
 
 const { Userno }  = this.state ;
 const { UserPassword }  = this.state ;
 
 
fetch('http://192.168.100.75/home/login.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
 
    house_no: Userno,
 
    house_password: UserPassword
 
  })
 
}).then((response) => response.json())
      .then((responseJson) => {
 
        // If server response message same as Data Matched
       if(responseJson === 'Data Matched')
        {
 
            //Then open Profile activity and send user email to profile activity.
            this.props.navigation.navigate("UserHome");
 
        }
        else{
 
          Alert.alert(responseJson);
        }
 
      }).catch((error) => {
        console.error(error);
      });
 
 
  }
 
  
  render() {
    return (
      <ImageBackground
        source={myBackground}
        style={{ width: "100%", height: "100%" }}
      >
         <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/male-user/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="House Number"
              keyboardType="email-address"
              underlineColorAndroid="transparent"
             onChangeText={Userno => this.setState({Userno})}
              />
        </View>

      
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={UserPassword => this.setState({UserPassword})}
              />
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]}  onPress={this.UserLoginFunction}>
          <Text style={styles.signUpText}>Sign up</Text>
        </TouchableHighlight>
      </View>
  
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:10,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:5,
    width:250,
    borderRadius:30,
  },
  signupButton: {
    backgroundColor: "#FF4DFF",
  },
  signUpText: {
    color: 'white',
  }
});
 