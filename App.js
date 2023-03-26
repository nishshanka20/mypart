import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import PaymentHistory from './components/PaymentHistory';
import PaymentDisplay from './components/PaymentDisplay';
import PaymentMethod from './components/PaymentMethod';
import Paypal from './components/Paypal';
import Rate from './components/Rate';


const Stack = createStackNavigator();

export default function App() {
  return ( 
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="PaymentDisplay" component={PaymentDisplay} options={{title: 'Payment Display'}} />
        <Stack.Screen name="PaymentHistory" component={PaymentHistory} options={{title: 'Payment History'}} />
        <Stack.Screen name="PaymentMethod" component={PaymentMethod} options={{title: 'Payment Method'}} />
        <Stack.Screen name="Paypal" component={Paypal} options={{title:'paypal'}}/>
      </Stack.Navigator>
    </NavigationContainer>
     //<Rate/>
    //<PaymentHistory/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    flex:1,
    backgroundColor:'#5F4DD6',
    alignItems:'center',
    width:'100%',
    height:'50%',
  },
});
