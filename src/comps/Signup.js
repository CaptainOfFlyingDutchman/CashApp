import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux';

// import NumPad from './NumPad';

class Signup extends Component {
  static navigationOptions = () => ({
    header: null
  });

  static propTypes = {
    // numPad: PropTypes.object.isRequired
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'space-around' }}>
        <View>
          <Text>Please enter your email id to setup your account.</Text>
        </View>

        <View>
          <TextInput keyboardType="email-address" />
        </View>
      </View>
    );
  }
}

export default connect(state => ({
  // numPad: state.numPad
}))(Signup);
