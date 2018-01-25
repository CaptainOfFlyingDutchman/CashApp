import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={{backgroundColor: 'green', flex: 1, justifyContent: 'flex-end'}} >
        <View>
          <View style={{padding: 15, flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity>
              <Text style={{fontSize: 17, color: 'white' }}>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor: 'lightgreen', paddingLeft: 11, paddingRight: 11, borderRadius: 31}}>
              <Text style={{fontSize: 17, color: 'white' }}>My Cash</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{fontSize: 17, color: 'white' }}>History</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{justifyContent: 'center'}}>
          <Text style={{fontSize: 67, padding: 57, textAlign: 'center'}}>
            <Text style={{fontSize: 18}}>$</Text>23,566
          </Text>
        </View>

        <View style={{flex: 1, justifyContent: 'flex-end', marginBottom: 21}}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 3 }}>
            <TouchableOpacity style={{flex: 1, borderBottomColor: 'white', borderBottomWidth: 1, marginLeft: 20, marginRight: 20, padding: 21, paddingTop: 21, paddingBottom: 21}}>
              <Text style={{ textAlign: 'center', color: 'white', fontSize: 18, fontWeight: 'bold' }}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 1, borderBottomColor: 'white', borderBottomWidth: 1, marginLeft: 20, marginRight: 20, padding: 21, paddingTop: 21, paddingBottom: 21}}>
              <Text style={{ textAlign: 'center', color: 'white', fontSize: 18, fontWeight: 'bold' }}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 1, borderBottomColor: 'white', borderBottomWidth: 1, marginLeft: 20, marginRight: 20, padding: 21, paddingTop: 21, paddingBottom: 21}}>
              <Text style={{ textAlign: 'center', color: 'white', fontSize: 18, fontWeight: 'bold' }}>3</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 3 }}>
            <TouchableOpacity style={{flex: 1, borderBottomColor: 'white', borderBottomWidth: 1, marginLeft: 20, marginRight: 20, padding: 21, paddingTop: 21, paddingBottom: 21}}>
              <Text style={{ textAlign: 'center', color: 'white', fontSize: 18, fontWeight: 'bold' }}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 1, borderBottomColor: 'white', borderBottomWidth: 1, marginLeft: 20, marginRight: 20, padding: 21, paddingTop: 21, paddingBottom: 21}}>
              <Text style={{ textAlign: 'center', color: 'white', fontSize: 18, fontWeight: 'bold' }}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 1, borderBottomColor: 'white', borderBottomWidth: 1, marginLeft: 20, marginRight: 20, padding: 21, paddingTop: 21, paddingBottom: 21}}>
              <Text style={{ textAlign: 'center', color: 'white', fontSize: 18, fontWeight: 'bold' }}>6</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 3 }}>
            <TouchableOpacity style={{flex: 1, borderBottomColor: 'white', borderBottomWidth: 1, marginLeft: 20, marginRight: 20, padding: 21, paddingTop: 21, paddingBottom: 21}}>
              <Text style={{ textAlign: 'center', color: 'white', fontSize: 18, fontWeight: 'bold' }}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 1, borderBottomColor: 'white', borderBottomWidth: 1, marginLeft: 20, marginRight: 20, padding: 21, paddingTop: 21, paddingBottom: 21}}>
              <Text style={{ textAlign: 'center', color: 'white', fontSize: 18, fontWeight: 'bold' }}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 1, borderBottomColor: 'white', borderBottomWidth: 1, marginLeft: 20, marginRight: 20, padding: 21, paddingTop: 21, paddingBottom: 21}}>
              <Text style={{ textAlign: 'center', color: 'white', fontSize: 18, fontWeight: 'bold' }}>9</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 3 }}>
            <TouchableOpacity style={{flex: 1, borderBottomColor: 'white', borderBottomWidth: 1, marginLeft: 20, marginRight: 20, padding: 21, paddingTop: 21, paddingBottom: 21}}>
              <Text style={{ textAlign: 'center', color: 'white', fontSize: 18, fontWeight: 'bold' }}>.</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 1, borderBottomColor: 'white', borderBottomWidth: 1, marginLeft: 20, marginRight: 20, padding: 21, paddingTop: 21, paddingBottom: 21}}>
              <Text style={{ textAlign: 'center', color: 'white', fontSize: 18, fontWeight: 'bold' }}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 1, borderBottomColor: 'white', borderBottomWidth: 1, marginLeft: 20, marginRight: 20, padding: 21, paddingTop: 21, paddingBottom: 21}}>
              <Text style={{ textAlign: 'center', color: 'white', fontSize: 18, fontWeight: 'bold' }}>&lt;</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{}} >
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <TouchableOpacity style={{ borderRightWidth: 1, borderRightColor: 'green', backgroundColor: 'white', padding: 21, flex: 1 }}>
                <Text style={{textAlign: 'center', color: 'green', fontSize: 20 }}>REQUEST</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ backgroundColor: 'white', padding: 21, flex: 1 }}>
                <Text style={{textAlign: 'center', color: 'green', fontSize: 20 }}>PAY</Text>
              </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
});
