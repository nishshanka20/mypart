// import React from "react";
// import { Text,View,StyleSheet,Button,Image, TouchableOpacity, Alert} from "react-native";
// import {PaymentHistory} from "./PaymentHistory";
// import Paypal from "./Paypal";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

// //import ByHand from "./ByHand";
// const Stack =createNativeStackNavigator();

// export default function PaymentDisplay({navigation}){

//   const handlePaypalPress=()=>{
//    navigation.navigate("Paypal");
//    };
//     return(
      
//         <View style={styles.contain}>
//             <View style={styles.valueContain}>
//                 <Text style={styles.value}>RS 450.00</Text>
//             </View>
//             <View style={styles.header} >
//                 <Text style={styles.hedText}>Payment Method </Text>
//             </View>
//             <View style={styles.buttonContainer}>
           
//               <TouchableOpacity style={styles.buttonOne}
//               // activeOpacity={0.5}
//               onPress={handlePaypalPress}>
//                 <Image
//                 source={require("../assets/paypal.png")}
//                 style={{width:105,height:120}}/>
//                 {/* onPress={()=> Alert.alert('fggfg')} */}
//               </TouchableOpacity>
//               {/* onPress={()=> Alert.alert('fggfg')} */}

//               <TouchableOpacity style={styles.buttonOne}
//               activeOpacity={0.5}
//               onPress={()=> Alert.alert('Request for confirmation sent to creditor')}>
//                 <Image
//                 source={require("../assets/byhand.png")}
//                 style={{width:100,height:100}}/>
//               </TouchableOpacity>

//         </View>
            
//         </View>
      

//     );

// }
// const styles = StyleSheet.create({
//     contain: {
//         flex: 1,
//         backgroundColor: '#FFF',
//         alignItems: 'center',
//         justifyContent: 'center',
//       },
//     valueContain: {
//       flex: 1,
//       backgroundColor: '#fff',
//       alignItems: 'center',
//       justifyContent: 'center',
//       border:2,
//       padding:4,
//       margin:4,
//       borderColor:'black',
//     },
//     value:{
//       flex:0.5,
//       textColor:'black',
//       textAlign:'center',
//       fontSize:45
//     },
//     header:{
//       flex:1,
//       //fontSize:30,

//     },
//     hedText:{
//       fontSize:30,
//     },
//     firstcontainer:{
//       //justifyContent: 'center',
//       flexDirection:'row',
//       //width: '90%',
//       //height: 80,
//       //margin:'10%',
//       //justifyContent:'space-between'
//       //backgroundColor: 'white',
//       //shadowColor:'black',
//       //shadowOffset:{width:5,height:5},
//       //elevation:5,
//       //shadowOpacity:1,
//       //borderRadius: 15,
//       //marginHorizontal:18,
//       //boarderOpacity: 0.5,
//       //marginTop: 20,
//       //alignItems: 'center',
      
      
      
//     },
//     buttonOneStyle: {
//       padding: 10,
//       margin: 5,
//       height: 10,
//       width: 10,
//       resizeMode: 'stretch',
//     },
    
//   });
import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PaymentHistory } from "./PaymentHistory";
import Paypal from "./Paypal";

const Stack = createNativeStackNavigator();

export default function PaymentDisplay({ navigation }) {
  const handlePaypalPress = () => {
    navigation.navigate("Paypal");
  };

  return (
    <View style={styles.container}>
      <View style={styles.valueContainer}>
        <Text style={styles.value}>RS 450.00</Text>
      </View>
      <View style={styles.header}>
        <Text style={styles.headerText}>Payment Method </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttonOne}
          onPress={handlePaypalPress}
        >
          <Image
            source={require("../assets/paypal.png")}
            style={{ width: 105, height: 120,padding:50 }}

          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonOne}
          onPress={() =>
            Alert.alert("Request for confirmation sent to creditor")
          }
        >
          <Image
            source={require("../assets/byhand.png")}
            style={{ width: 100, height: 100 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
  valueContainer: {
    flex: 2.5,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    //borderWidth: 2,
    padding: 4,
    margin: 4,
    //borderColor: "black",
  },
  value: {
    flex: 0.5,
    color: "black",
    textAlign: "center",
    fontSize: 45,
  },
  header: {
    flex: 1,
  },
  headerText: {
    fontSize: 30,
  },
  buttonContainer: {
    flexDirection: "row",
    marginBottom:200,
  },
  buttonOne: {
    marginHorizontal: 10,
    marginVertical: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
