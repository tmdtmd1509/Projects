import React, {Component} from 'react';
import {Text, View} from 'react-native';
import firebase from 'firebase';
import {Card, CardItem, Button, Input, Spinner} from './common';

class LoginForm extends Component {
    state = {email: '', password:'', error: '', loading: false};

    onButtonPress(){
        const {email, password} = this.state;

        this.setState({error: '', loading: true});
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(this.onLoginFaild.bind(this));
            });
    }

    onLoginFaild() {
        if(this.state.password === ""){
            this.setState({
                error:'Password can\'t be empty',
                loading: false
                });            
        }
        else if(this.state.password.length < 6){
            this.setState({
                error:'Password must be atleast 6 characters',
                loading: false
                });
        }
        else{
            this.setState({
                error: 'Authntication failed.',
                loading: false
                });
        }


    }

    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            loading: false,
            error: ''
        })
    }

    renderButton(){
        if (this.state.loading) {
            return <Spinner size='small'/>;
        }
        else{
            return (
                <Button 
                    onPress={this.onButtonPress.bind(this)}> 
                    Log In
                </Button>);
        }
    }

    render() {
        return (
            <Card>
                <CardItem>
                    <Input
                        placeHolder='Email'
                        value={this.state.email}
                        onChangeText={email => this.setState({email})}
                    />
                </CardItem>
                <CardItem>
                    <Input
                        secureTextEntry={true}
                        placeHolder='Password'
                        value={this.state.password}
                        onChangeText={password => this.setState({password})}
                    />
                </CardItem>
                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>
                    {this.renderButton()}
            </Card>           
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: '#E06762'
    }
}

export default LoginForm;