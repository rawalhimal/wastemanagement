import React,{Component} from 'react';
import {View,ActivityIndicator} from 'react-native';
import * as firebase from 'firebase';
export default class Loading extends Component{
    checkIfLoggedIn=()=>{
firebase.auth().onAuthStateChanged(user=>{
    if(user){
        
    }
    else{

    }
})

    }
    render(){
        return (<View><ActivityIndicator size='large'/></View>)
    }

}

