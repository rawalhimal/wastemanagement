import React from "react";
import {
  View,
  Text,
  Dimensions,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import { Icon, List, Button } from "native-base";
var height = Dimensions.get("window").height / 2;
var width = Dimensions.get("window").width;
const myBackground = require("../assets/logo4.jpg");
class AdminHome extends React.Component {
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
          <View style={{ height: "100%", backgroundColor: "#009624" }}>
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
                 // backgroundColor: "#ff0000",
                 backgroundColor: "#2300B0",
                  borderRadius: 20,
                  justifyContent: "center",
                }}
                onPress={() => this.props.navigation.navigate("ButtonBlockExample")}
              >
                
                  <Text> </Text>
                  <Text style={{ alighItems:"center",fontSize: 30, color: "#e3f2fd" }}>
                    See Request
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
                  backgroundColor: "#2300B0",
                  borderRadius: 20
                }}
                onPress={() => this.props.navigation.navigate("FetchComplain")}
              >
               
                  <Text> </Text>
                  <Text style={{ fontSize: 30, color: "#e3f2fd" }}>
                  See  Complain
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
                  backgroundColor: "#2300B0",
                }}
                onPress={() => this.props.navigation.navigate("")}
              >
               
                  <Text> </Text>
                  <Text style={{ fontSize: 30, color: "#e3f2fd" }}>
                    Sent Information
                  </Text>
      
              </Button>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

export default AdminHome;