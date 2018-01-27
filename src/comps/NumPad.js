import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { addValue, removeValue } from './numPad.actions';

const styles = StyleSheet.create({
  container: { justifyContent: 'flex-end', marginBottom: 21 },
  row: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 3 },
  buttonContainer: { flex: 1, borderBottomColor: 'white', borderBottomWidth: 1,
    marginLeft: 20, marginRight: 20, padding: 21, paddingTop: 21, paddingBottom: 21 },
  button: { textAlign: 'center', color: 'white', fontSize: 18, fontWeight: 'bold' }
});

class NumPad extends Component {
  static propTypes = {
    numPad: PropTypes.object.isRequired,
    addValue: PropTypes.func.isRequired,
    removeValue: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      dotPressed: false
    };
  }

  dispatchAddValue = (value) => {
    this.state.dotPressed ? this.props.addValue(value) : this.props.addValue(value, true);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.buttonContainer} onPress={() => this.dispatchAddValue(1)}>
            <Text style={styles.button}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer} onPress={() => this.dispatchAddValue(2)}>
            <Text style={styles.button}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer} onPress={() => this.dispatchAddValue(3)}>
            <Text style={styles.button}>3</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.buttonContainer} onPress={() => this.dispatchAddValue(4)}>
            <Text style={styles.button}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer} onPress={() => this.dispatchAddValue(5)}>
            <Text style={styles.button}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer} onPress={() => this.dispatchAddValue(6)}>
            <Text style={styles.button}>6</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.buttonContainer} onPress={() => this.dispatchAddValue(7)}>
            <Text style={styles.button}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer} onPress={() => this.dispatchAddValue(8)}>
            <Text style={styles.button}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer} onPress={() => this.dispatchAddValue(9)}>
            <Text style={styles.button}>9</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.buttonContainer} onPress={() => this.setState({ dotPressed: true })}>
            <Text style={styles.button}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer} onPress={() => {
            if (this.props.numPad.characteristic.length) {
              this.dispatchAddValue(0);
            }
          }}>
            <Text style={styles.button}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer} onPress={() => {
            this.state.dotPressed ? this.props.removeValue() : this.props.removeValue(true);
            if (this.props.numPad.mantissa.length === 1) {
              this.setState({ dotPressed: false });
            }
          }}>
            <Text style={styles.button}>&lt;</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default connect(state => ({
  numPad: state.numPad
}), { addValue, removeValue })(NumPad);
