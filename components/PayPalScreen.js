import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { PayPalButton } from '@paypal/react-native';

const PayPalScreen = () => {
  const [paymentSuccessful, setPaymentSuccessful] = useState(false);

  const handlePayment = (details, data) => {
    // Call your Node.js backend to process the payment and mark it as successful
    setPaymentSuccessful(true);
  };

  return (
    <View>
      <Text>Pay with PayPal</Text>
      <PayPalButton
        amount="10.00"
        currency="USD"
        onApprove={handlePayment}
      />
      {paymentSuccessful && (
        <Text>Your payment was successful!</Text>
      )}
    </View>
  );
};

export default PayPalScreen;
