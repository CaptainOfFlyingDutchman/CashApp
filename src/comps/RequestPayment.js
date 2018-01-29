import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import NumPad from './NumPad';

class RequestPayment extends Component {
  static navigationOptions = () => ({
    header: null
  });

  static propTypes = {
    numPad: PropTypes.object.isRequired
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'green', justifyContent: 'space-between' }} >
        <View style={{ padding: 15, flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity>
            <Text style={{ fontSize: 17, color: 'white' }}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ backgroundColor: 'lightgreen', paddingLeft: 11, paddingRight: 11, borderRadius: 31 }}>
            <Text style={{ fontSize: 17, color: 'white' }}>My Cash</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{ fontSize: 17, color: 'white' }}>History</Text>
          </TouchableOpacity>
        </View>

        <View style={{ justifyContent: 'center' }}>
          <Text style={{ fontSize: 67, textAlign: 'center' }}>
            <Text style={{ fontSize: 22 }}>$</Text>
            { this.props.numPad.characteristic.length ? this.props.numPad.characteristic : 0 }
            <Text style={{ fontSize: 37 }}>.
              { this.props.numPad.mantissa.length ? this.props.numPad.mantissa : 0 }
            </Text>
          </Text>
        </View>

        <NumPad />

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity style={{ borderRightWidth: 1, borderRightColor: 'green', backgroundColor: 'white', padding: 21, flex: 1 }}>
            <Text style={{ textAlign: 'center', color: 'green', fontSize: 20 }}>REQUEST</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ backgroundColor: 'white', padding: 21, flex: 1 }}>
            <Text style={{ textAlign: 'center', color: 'green', fontSize: 20 }}>PAY</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

export default connect(state => ({
  numPad: state.numPad
}))(RequestPayment);
