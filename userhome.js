import React from "react";
import {
  View,
  Text,
  Dimensions,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import { Icon, List, Button } from "native-base";
import {
  AwesomeButton,
  AwesomeButtonProgress,
  AwesomeButtonSocial,
} from 'react-awesome-button';
var height = Dimensions.get("window").height / 2;
var width = Dimensions.get("window").width;
const myBackground = require("../assets/1.jpg");
class UserHome extends React.Component {
  state = {};
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <ImageBackground
        source={myBackground}
        style={{ width: "100%", height: "100%" }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "stretch",
            marginTop: height
          }}
        >
          <View style={{ height: "100%", backgroundColor: "#40ff00" }}>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                margin: 20,
                marginTop: 50
              }}
            >
              <Button
                style={{
                  width: "100%",
                  height: 50,
                  backgroundColor: "#ff00bf",
                  borderRadius: 20,
                  justifyContent: "center",
                }}
                onPress={() => this.props.navigation.navigate("Request")}
              >
                
                  <Text> </Text>
                  <Text style={{ alighItems:"center",fontSize: 30, color: "#e3f2fd" }}>
                    Request
                  </Text>
        
              </Button>
            </View>

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
                  width: "95%",
                  height: 50,
                  marginLeft: 10,
                  backgroundColor: "#ff00bf",
                  borderRadius: 20
                }}
                onPress={() => this.props.navigation.navigate("UserHomePage")}
              >
               
                  <Text> </Text>
                  <Text style={{ fontSize: 30, color: "#e3f2fd" }}>
                    Complain
                  </Text>
               
              </Button>
            </View>

            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                margin: 20
              }}
            >
              <Button
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  height: 50,
                  borderRadius: 20,
                  backgroundColor: "#ff00bf",
                }}
                onPress={() => this.props.navigation.navigate("Admin")}
              >
               
                  <Text> </Text>
                  <Text style={{ fontSize: 30, color: "#e3f2fd" }}>
                    Notification
                  </Text>
      
              </Button>
            </View>
            <AwesomeButtonProgress
  type="secondary"
  size="medium"
  action={(element, next) => doSomethingThenCall(next)}
>
  Primary
</AwesomeButtonProgress>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

export default UserHome;