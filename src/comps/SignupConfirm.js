import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, TextInput, Modal } from 'react-native';

class SignupConfirm extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired
  };

  static navigationOptions = () => ({
    header: null
  });

  constructor(props) {
    super(props);
    this.state = { help: false };
  }

  render() {
    const { navigation } = this.props;
    const { params } = navigation.state;

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
          <TouchableOpacity style={{ flex: 1, borderRightWidth: 1, backgroundColor: 'white', padding: 21 }}
            onPress={() => this.setState({ help: true })}>
            <Text style={{ textAlign: 'center' }}>Help</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 1, backgroundColor: 'white', padding: 21 }}>
            <Text style={{ textAlign: 'center' }}>Continue</Text>
          </TouchableOpacity>
        </View>

        <Modal animationType="fade" visible={this.state.help} transparent
          onRequestClose={() => this.setState({ help: false })}>
          <View style={{ flex: 1, justifyContent: 'flex-end' }}>
            <TouchableOpacity style={{ borderBottomWidth: 1, backgroundColor: 'white', padding: 21 }}
              onPress={() => navigation.goBack()}>
              <Text>Edit number/email</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: 'white', padding: 21 }}
              onPress={() => this.setState({ help: false })}>
              <Text>Resend code</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  }
}

export default SignupConfirm;
