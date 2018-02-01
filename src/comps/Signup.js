import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

class Signup extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired
  };

  static navigationOptions = () => ({
    header: null
  });

  constructor(props) {
    super(props);
    this.state = { user: '' };
  }

  render() {
    const { navigation } = this.props;

    return (
      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        <View style={{ padding: 21, paddingTop: 61 }}>
          <Text style={{ textAlign: 'center' }}>Welcome to CashApp!</Text>
          <Text style={{ textAlign: 'center' }}>Please enter your email id to</Text>
          <Text style={{ textAlign: 'center' }}>to continue</Text>
        </View>

        <View style={{ padding: 21 }}>
          <TextInput keyboardType="email-address" value={this.state.user}
            onChangeText={user => this.setState({ user })} />
        </View>

        <View style={{ borderWidth: 1, justifyContent: 'flex-end' }}>
          <TouchableOpacity style={{ backgroundColor: 'white', padding: 21 }}
            disabled={!this.state.user}
            onPress={() => navigation.navigate('SignupConfirm', {
              user: this.state.user
            })}>
            <Text style={{ textAlign: 'center' }}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Signup;
