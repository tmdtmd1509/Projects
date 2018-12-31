import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import {Header, Button, Spinner} from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = {
    loggedIn: null
  };

  componentWillMount() {
    firebase.initializeApp ({
      apiKey: "AIzaSyAraGdJiaFPhKmApRgoQDWDRY1t8RVR6wI",
      authDomain: "parkeasy-797f1.firebaseapp.com",
      databaseURL: "https://parkeasy-797f1.firebaseio.com",
      projectId: "parkeasy-797f1",
      storageBucket: "parkeasy-797f1.appspot.com",
      messagingSenderId: "604259045015"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user){
        this.setState({loggedIn: true});
      }
      else{
        this.setState({loggedIn: false});
      }
    });
  }

  renderContent() {
    switch(this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => 
            firebase.auth().signOut()}>
             Log Out
          </Button>
        );
      case false:
        return <LoginForm/>;
      defaut:
        return <Spinner size='large'/>;
    }
  }

  render(){
    return(
      <View>
        <Header headerText='LOGIN'/>
        {this.renderContent()}
      </View>
    );
  }
}




export default App;