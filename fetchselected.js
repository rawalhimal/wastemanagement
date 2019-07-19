import React, { Component } from "react";
import {Form,Picker} from "native-base";

import { StyleSheet, View, TextInput, Button, Text, Alert,TouchableOpacity } from "react-native";

export default class ButtonBlockExample extends Component {
    static navigationOptions={
        title:"Select the Ward Number"
    };

  render() {
    return (
      
<View style={styles.MainContainer}>
        
        <Text  state={{fontSize:"30"}} style = {styles.textDesign}>Ward Number 1</Text>
        <Text onPress={()=>this.props.navigation.navigate("FetchRequest")} style = {styles.textDesign}>Ward Number 2</Text>
        <Text  style = {styles.textDesign}>Ward Number 3</Text>
        <Text onPress={()=>this.props.navigation.navigate("FetchRequest")} style = {styles.textDesign}>Ward Number 4</Text>
        <Text onPress={()=>this.props.navigation.navigate("FetchRequest")} style = {styles.textDesign}>Ward Number 5</Text>
        <Text onPress={()=>this.props.navigation.navigate("FetchRequest")} style = {styles.textDesign} >Ward Number 6</Text>
 </View>
      
    );
      
     
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: "center",
    alignItems:'center',
   
    margin: 10
  },

  TextInputStyleClass: {
    textAlign: "center",
    marginBottom: 7,
    height: 40,
    borderWidth: 1,
    borderColor: "#2196F3",
    borderRadius: 5,
    color: "black"
  },

  title: {
    fontSize: 30,
    color: "black",
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
  textDesign:{
      fontSize:40,
      padding:10,
      color:'rgba(83, 51, 237, 1)'
  }
 
});
// import React, { Component } from "react";
// import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
// import {
//   Container,
//   Content,
//   Card,
//   CardItem,
//   Left,
//   Right,
//   Button,
//   Body,
//   Icon
// } from "native-base";
// import call from "react-native-phone-call";
// class recycler extends Component {
//   callBalkumari = () => {
//     //handler to make a call
//     const args = {
//       number: "9808723362",
//       prompt: false
//     };
//     call(args).catch(console.error);
//   };
//   callPulchowk = () => {
//     //handler to make a call
//     const args = {
//       number: "9841209336",
//       prompt: false
//     };
//     call(args).catch(console.error);
//   };
//   callBhaktapur = () => {
//     //handler to make a call
//     const args = {
//       number: "9841289336",
//       prompt: false
//     };
//     call(args).catch(console.error);
//   };
//   callGongabu = () => {
//     //handler to make a call
//     const args = {
//       number: "9801237745",
//       prompt: false
//     };
//     call(args).catch(console.error);
//   };
//   callChabahil = () => {
//     //handler to make a call
//     const args = {
//       number: "9861230012",
//       prompt: false
//     };
//     call(args).catch(console.error);
//   };
//   callChakrapath = () => {
//     //handler to make a call
//     const args = {
//       number: "9802301126",
//       prompt: false
//     };
//     call(args).catch(console.error);
//   };
//   callKalanki = () => {
//     //handler to make a call
//     const args = {
//       number: "9841239111",
//       prompt: false
//     };
//     call(args).catch(console.error);
//   };
  
//   constructor() {
//     super();
//     this.state = {
//       isLoading: false
//     };
//   }
//   acceptorLogin = () => {};
//   render() {
//     return this.state.isLoading === true ? (
//       <View style={styles.container}>
//         <ActivityIndicator />
//       </View>
//     ) : (
//       <Container>
//         <Content>
//           <Card>
//             <CardItem>
//               <Body>
//                 <Text style={{ fontSize: 24, fontWeight: "bold" }}>Collectors</Text>
//               </Body>
//             </CardItem>
//             <CardItem header bordered>
//               <Body>
//               <Text >
//                 1. Ram Yadav
//               </Text>
//               <Text>Balkumari
//               </Text>
//               </Body>
//               <Right>
//                 <Icon
//                   type="Zocial"
//                   name="call"
//                   onPress={this.callBalkumari}
//                   style={{ color: "green" ,fontSize:24}}
//                   active
//                 />
//               </Right>
//             </CardItem>
//             <CardItem header bordered>
//               <Body>
//               <Text >
//                 2.Shyam Jha
//               </Text>
//               <Text>Pulchowk
//               </Text>
//               </Body>
//               <Right>
//                 <Icon
//                   type="Zocial"
//                   name="call"
//                   onPress={this.callPulchowk}
//                   style={{ color: "green" ,fontSize:24}}
//                   active
//                 />
//               </Right>
//             </CardItem>
//             <CardItem header bordered>
//               <Body>
//               <Text >
//                 3.Govinda jha
//               </Text>
//               <Text>Bhaktapur
//               </Text>
//               </Body>
//               <Right>
//                 <Icon
//                   type="Zocial"
//                   name="call"
//                   onPress={this.callBhaktapur}
//                   style={{ color: "green" ,fontSize:24}}
//                   active
//                 />
//               </Right>
//             </CardItem>
//             <CardItem header bordered>
//               <Body>
//               <Text >
//                 3.Shyam Maharjan
//               </Text>
//               <Text>Gongabu
//               </Text>
//               </Body>
//               <Right>
//                 <Icon
//                   type="Zocial"
//                   name="call"
//                   onPress={this.callGongabu}
//                   style={{ color: "green" ,fontSize:24}}
//                   active
//                 />
//               </Right>
//               </CardItem>
//               <CardItem header bordered>
//               <Body>
//               <Text >
//                 3.Govinda jha
//               </Text>
//               <Text>Chabahil
//               </Text>
//               </Body>
//               <Right>
//                 <Icon
//                   type="Zocial"
//                   name="call"
//                   onPress={this.callChabahil}
//                   style={{ color: "green" ,fontSize:24}}
//                   active
//                 />
//               </Right>
//               </CardItem>
//               <CardItem header bordered>
//               <Body>
//               <Text >
//                 3.Govinda jha
//               </Text>
//               <Text>Chakrapath
//               </Text>
//               </Body>
//               <Right>
//                 <Icon
//                   type="Zocial"
//                   name="call"
//                   onPress={this.callChakrapath}
//                   style={{ color: "green" ,fontSize:24}}
//                   active
//                 />
//               </Right>
//               </CardItem>
//               <CardItem header bordered>
//               <Body>
//               <Text >
//                 3.Govinda jha
//               </Text>
//               <Text>Kalanki
//               </Text>
//               </Body>
//               <Right>
//                 <Icon
//                   type="Zocial"
//                   name="call"
//                   onPress={this.callKalanki}
//                   style={{ color: "green" ,fontSize:24}}
//                   active
//                 />
//               </Right>
//               </CardItem>
//           </Card>
//         </Content>
//       </Container>
//     );
//   }
// }
// export default recycler;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center"
//   }
// });




