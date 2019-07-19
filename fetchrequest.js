import React, { Component } from 'react';
 
import { AppRegistry, StyleSheet, ActivityIndicator, ListView, Text, View, Alert, Platform, TouchableOpacity} from 'react-native';
 
class FetchRequest extends Component {
  static navigationOptions={
    title:'See Request Data'
  };
 
constructor(props) {
  super(props);
  this.state = {
    
    isLoading: true
  }
}

 
componentDidMount() {
 
  return fetch('http://192.168.208.2/userrequest/FetchRequest.php')
    .then((response) => response.json())
    .then((responseJson) => {
      let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.setState({
        isLoading: false,
        dataSource: ds.cloneWithRows(responseJson),
      }, function() {
        // In this block you can do something with new state.
      });
    })
    .catch((error) => {
      console.error(error);
    });
}
 
ListViewItemSeparator = () => {
  return (
    <View
      style={{
 
        height: .5,
        width: "100%",
        backgroundColor: "#000",
 
      }}
    />
  );
}


 
 
render() {
  if (this.state.isLoading) {
    return (
      <View style={{flex: 1, paddingTop: 20}}>
        <ActivityIndicator />
      </View>
    );
  }
 
  return (
 
    <View style={styles.MainContainer}>
 
      <ListView
 
        dataSource={this.state.dataSource}
 
        renderSeparator= {this.ListViewItemSeparator}
 
        renderRow={(rowData) =>
 
       <View style={{flex:1, flexDirection: 'column'}} >
 
        
       
        
         <Text style={{fontSize:20, textAlign: 'center', marginBottom: 7,color:'black',fontWeight:'bold'}}> Request Detail </Text>
         
         
         <Text style={{fontSize:15,color:'red',fontWeight:'bold'}}>ward Number:</Text>
         <Text style={styles.textViewContainer} >{' ' + rowData.oda_number}</Text>


         <Text style={{fontSize:15,color:'red',fontWeight:'bold'}}>Address:</Text>
         <Text style={styles.textViewContainer} >{' ' + rowData.request_address}</Text>


      
       
 
       </View>
 
        }
        />
 
    </View>
  );
}
}
 
const styles = StyleSheet.create({
 
MainContainer :{
 
// Setting up View inside content in Vertically center.
justifyContent: 'center',
flex:1,
paddingTop: (Platform.OS === 'ios') ? 20 : 0,
backgroundColor: '#00BCD4',
padding: 5,
 
},
 
textViewContainer: {
 
 textAlignVertical:'center', 
 padding:10,
 fontSize: 20,
 color: '#fff',
 
}
 
});
 export default FetchRequest;
//AppRegistry.registerComponent('Project', () => Project);