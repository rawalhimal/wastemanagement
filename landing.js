import React from "react";
import { Text, View, ImageBackground } from "react-native";
import { Button } from "native-base";

const myBackground = require("../assets/landing.png");
export default class Landing extends React.Component {
  render() {
    return (
      <ImageBackground
        source={myBackground}
        style={{ width: "100%", height: "100%" }}
      >
        <View
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "grey",
            height: "50%"
          }}
        >
          <View style={{ marginTop: 10 }}>
            <Button full rounded>
              <Text>User Login</Text>
            </Button>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
