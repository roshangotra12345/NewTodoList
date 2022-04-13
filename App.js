import {StyleSheet, View} from 'react-native';
import React from 'react';
import Context from './Context';
import Elements from './src/Component/Elements';

const App = () => {
  return (
    <View>
      <Context>
        <Elements />
      </Context>
    </View>
  );
};

export default App;
