import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

class SignupConfirm extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired
  };

  static navigationOptions = () => ({
    header: null
  });

  render() {
    const { params } = this.props.navigation.state;

    return (
      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        <View style={{ padding: 21, paddingTop: 61 }}>
          <Text style={{ textAlign: 'center' }}>Cool! We sent a code</Text>
          <Text style={{ textAlign: 'center' }}>to {params && params.user}</Text>
        </View>

        <View style={{ padding: 21 }}>
          <TextInput keyboardType="email-address" />
        </View>

        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={{ flex: 1, backgroundColor: 'white', padding: 21 }}>
            <Text style={{ textAlign: 'center' }}>Continue</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 1, backgroundColor: 'white', padding: 21 }}>
            <Text style={{ textAlign: 'center' }}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default SignupConfirm;
