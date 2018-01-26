import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import NumPad from './src/comps/NumPad';

const App = () => {
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
        <Text style={{ fontSize: 67, padding: 57, textAlign: 'center' }}>
          <Text style={{ fontSize: 18 }}>$</Text>23,566
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
};

export default App;
