import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

const NumPad = () => {
  return (
    <View>
      <View style={{ justifyContent: 'flex-end', marginBottom: 21 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 3 }}>
          <TouchableOpacity style={{ flex: 1, borderBottomColor: 'white', borderBottomWidth: 1, marginLeft: 20, marginRight: 20, padding: 21, paddingTop: 21, paddingBottom: 21 }}>
            <Text style={{ textAlign: 'center', color: 'white', fontSize: 18, fontWeight: 'bold' }}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 1, borderBottomColor: 'white', borderBottomWidth: 1, marginLeft: 20, marginRight: 20, padding: 21, paddingTop: 21, paddingBottom: 21 }}>
            <Text style={{ textAlign: 'center', color: 'white', fontSize: 18, fontWeight: 'bold' }}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 1, borderBottomColor: 'white', borderBottomWidth: 1, marginLeft: 20, marginRight: 20, padding: 21, paddingTop: 21, paddingBottom: 21 }}>
            <Text style={{ textAlign: 'center', color: 'white', fontSize: 18, fontWeight: 'bold' }}>3</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 3 }}>
          <TouchableOpacity style={{ flex: 1, borderBottomColor: 'white', borderBottomWidth: 1, marginLeft: 20, marginRight: 20, padding: 21, paddingTop: 21, paddingBottom: 21 }}>
            <Text style={{ textAlign: 'center', color: 'white', fontSize: 18, fontWeight: 'bold' }}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 1, borderBottomColor: 'white', borderBottomWidth: 1, marginLeft: 20, marginRight: 20, padding: 21, paddingTop: 21, paddingBottom: 21 }}>
            <Text style={{ textAlign: 'center', color: 'white', fontSize: 18, fontWeight: 'bold' }}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 1, borderBottomColor: 'white', borderBottomWidth: 1, marginLeft: 20, marginRight: 20, padding: 21, paddingTop: 21, paddingBottom: 21 }}>
            <Text style={{ textAlign: 'center', color: 'white', fontSize: 18, fontWeight: 'bold' }}>6</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 3 }}>
          <TouchableOpacity style={{ flex: 1, borderBottomColor: 'white', borderBottomWidth: 1, marginLeft: 20, marginRight: 20, padding: 21, paddingTop: 21, paddingBottom: 21 }}>
            <Text style={{ textAlign: 'center', color: 'white', fontSize: 18, fontWeight: 'bold' }}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 1, borderBottomColor: 'white', borderBottomWidth: 1, marginLeft: 20, marginRight: 20, padding: 21, paddingTop: 21, paddingBottom: 21 }}>
            <Text style={{ textAlign: 'center', color: 'white', fontSize: 18, fontWeight: 'bold' }}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 1, borderBottomColor: 'white', borderBottomWidth: 1, marginLeft: 20, marginRight: 20, padding: 21, paddingTop: 21, paddingBottom: 21 }}>
            <Text style={{ textAlign: 'center', color: 'white', fontSize: 18, fontWeight: 'bold' }}>9</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 3 }}>
          <TouchableOpacity style={{ flex: 1, borderBottomColor: 'white', borderBottomWidth: 1, marginLeft: 20, marginRight: 20, padding: 21, paddingTop: 21, paddingBottom: 21 }}>
            <Text style={{ textAlign: 'center', color: 'white', fontSize: 18, fontWeight: 'bold' }}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 1, borderBottomColor: 'white', borderBottomWidth: 1, marginLeft: 20, marginRight: 20, padding: 21, paddingTop: 21, paddingBottom: 21 }}>
            <Text style={{ textAlign: 'center', color: 'white', fontSize: 18, fontWeight: 'bold' }}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 1, borderBottomColor: 'white', borderBottomWidth: 1, marginLeft: 20, marginRight: 20, padding: 21, paddingTop: 21, paddingBottom: 21 }}>
            <Text style={{ textAlign: 'center', color: 'white', fontSize: 18, fontWeight: 'bold' }}>&lt;</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default NumPad;
