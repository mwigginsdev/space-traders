import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Button, Stack, Text, TextInput } from "@react-native-material/core";
import ApiService from './src/service/ApiService';
import { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/state/store';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.apiService = new ApiService();
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <View style={styles.container}>
            <Text variant='h6'>Welcome to Space Traders!</Text>
            <Text>Input a name for your Agent to register.</Text>
            <StatusBar style="auto" />
      
            <Stack>
              <TextInput
              label="Agent Name"
              variant="outlined" 
              style={{ margin: 16, width: 300 }} 
              onChangeText={this.handleChange}
              value={this.state.username}/>
        
              <Button 
              title="Register" 
              style={{ alignSelf: "center", marginTop: 40 }}
              onPress= { () => 
                this.handleRegister()
              }
              />
            </Stack>
        </View>
        </PersistGate>
      </Provider>
    );
  }

  handleChange(event = {}) {
    this.setState({username: event});
  }


  handleRegister() {
    resp = this.apiService.registerAgent(this.state.username);

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
