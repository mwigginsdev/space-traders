import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Button, Text, TextInput } from "@react-native-material/core";
import ApiService from './src/service/ApiService';
import { Component } from 'react';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text variant='h6'>Welcome to Space Traders!</Text>
        <Text>Input a name for your Agent to register.</Text>
        <StatusBar style="auto" />
  
        <TextInput
        label="Agent Name"
        variant="outlined" 
        style={{ margin: 16, width: 300 }} 
        onChangeText={this.handleChange}
        value={this.state.username}/>
  
        <Button 
        title="Register" 
        style={{ alignSelf: "center", marginTop: 40 }}
        onPress= {
          console.log('here')
          // console.log(this.state.username)
          // ApiService.registerAgent()
        }
        />
      </View>
    );
  }

  handleChange(event = {}) {
    console.log(event);
    // this.state.username += event;
    console.log(this.state.username);
    this.setState({username: event});
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
