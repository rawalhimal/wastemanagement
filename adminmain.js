import React, { Component } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { Form, Item, Label, Input, Button } from "native-base";


class Admin extends Component {
  state = {
    uname: [],
    pw: []
  };
  verify = () => {
    if (this.state.uname === "mahalaxmi" && this.state.pw === "12345")
      this.props.navigation.navigate("AdminHome");
    else if (this.state.uname === "imadol" && this.state.pw === "67890")
      this.props.navigation.navigate("AdminHome");
    else alert("invalid!!!");
  };
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <ImageBackground style={{ flex: 1, width:'100%',height: '100%' }}source={{uri:
        'https://aboutreact.com/wp-content/uploads/2018/08/8f17765c523f5b75f3dc60ae145e9df7.jpg', }} >
      <View style={styles.container}>
        <View style={{ alignItems: "center", marginTop: 60 }}>
          <Text style={{ marginTop:"50%",color:"#b71c1c",fontSize: 35, fontWeight: "bold" }}>Admin Login</Text>
        </View>
        <View style={styles.inputStyle}>
          <Form>
            <Item floatingLabel>
              <Label style={{ color: "#5d4037" }}>Muncipality Name</Label>
              <Input
                autoCorrect={false}
                onChangeText={uname => this.setState({ uname })}
              />
            </Item>
            <Item floatingLabel>
              <Label style={{ color: "#5d4037" }}>Password</Label>
              <Input
                autoCorrect={false}
                secureTextEntry
                onChangeText={pw => this.setState({ pw })}
              />
            </Item>
            <Button
              style={{ marginTop: 20 }}
              block
              rounded
              onPress={this.verify}
            >
              <Text>LogIn</Text>
            </Button>
          </Form>
        </View>
      </View>
      </ImageBackground>
    );
  }
}
export default Admin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  main: {
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "green",
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