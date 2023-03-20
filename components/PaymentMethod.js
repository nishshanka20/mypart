import React from 'react';
import { View, Button } from 'react-native';

const PaymentMethod = ({ navigation }) => {
  return (
    <View>
      <Button
        title="By Hand"
        onPress={() => navigation.navigate('ByHand')}
      />
      <Button
        title="Paypal"
        onPress={() => navigation.navigate('Paypal')}
      />
    </View>
  );
};

export default PaymentMethod;
