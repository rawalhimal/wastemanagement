
import React from "react";
import { Text, View } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import Home from "./Home/home";
import Log from "./Home/login";
import UserHomePage from "./User/userhomepage";
import FetchComplain from "./User/fetchusercomplain";
import UserHome from "./User/userhome";
import Request from "./User/insertrequest";
import AdminHome from "./Adminn/adminhome";
import FetchRequest from "./User/fetchrequest";
import Admin from "./Adminn/adminmain";
import ButtonBlockExample from "./Adminn/fetchselected";
import Landing from "./Home/home";
import Front from './Adminn/front'
import  LoginScreen from './Adminn/login';
 import * as firebase from 'firebase'
//  var firebaseConfig = {
//    apiKey: "AIzaSyAlgG7oLEUha6Q5iSaqKzcKLxZXpwrs6d0",
//   authDomain: "garbageapp-e150d.firebaseapp.com",
//   databaseURL: "https://garbageapp-e150d.firebaseio.com",
//   projectId: "garbageapp-e150d",
//   storageBucket: "",
//   messagingSenderId: "773810764556",
//   appId: "1:773810764556:web:cf7556634bcd0a06"
// };
// //Initialize Firebase
// firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppContainer />
      </View>
    );
  }
}
const stackNavigator = createStackNavigator({
   //Front,
   UserHome:UserHome,
   //RegisterUser:Home,
  // 
   //Landing:Landing,
  // UserHomePage:UserHomePage,
  // FetchComplain:FetchComplain,
  // Request:Request,
  //  Admin:Admin,
  // AdminHome:AdminHome,
  //  FetchComplain:FetchComplain,
  //  FetchRequest:FetchRequest,
  //  ButtonBlockExample :ButtonBlockExample,
   
 
 
});
const AppContainer = createAppContainer(stackNavigator);

