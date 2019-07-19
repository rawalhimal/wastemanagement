import React, { Component } from 'react';
 
import { AppRegistry, StyleSheet, ActivityIndicator, ListView, Text, View, Alert, Platform, TouchableOpacity} from 'react-native';
 
class FetchComplain extends Component {
  static navigationOptions={
    title:'See Complain Data'
  };
 
constructor(props) {
  super(props);
  this.state = {
    
    isLoading: true
  }
}
 
GetItem (donor_name) {

Alert.alert(donor_name);
 
}
 
 
componentDidMount() {
 
  return fetch('http://192.168.208.2/user/FetchComplain.php')
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
 
        
       
        
         <Text style={{fontSize:20, textAlign: 'center', marginBottom: 7,color:'black',fontWeight:'bold'}}> Complain Detail </Text>
         
         
         <Text style={{fontSize:15,color:'red',fontWeight:'bold'}}>Name:</Text>
         <Text style={styles.textViewContainer} >{'' + rowData.u_name}</Text>

         

         <Text style={{fontSize:15,color:'red',fontWeight:'bold'}}>Address:</Text>
         <Text style={styles.textViewContainer} >{' ' + rowData.u_address}</Text>


         <Text style={{fontSize:15,color:'red',fontWeight:'bold'}}>Phone number:</Text>        
       <Text style={styles.textViewContainer} >{' ' + rowData.uphone_number}</Text>

       
 
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
 export default FetchComplain;
//AppRegistry.registerComponent('Project', () => Project);