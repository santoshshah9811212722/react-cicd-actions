// import { StyleSheet, View } from 'react-native';
// import { default as Getstart } from '../components/Getstart';
// import Login from '../components/Login';


// const index = () => {
  
//   return (
//     <View>
     
//       <Getstart/>
//       <Login/>
      
//     </View>
    
    
   
    
//   )
// }

// export default index

// const styles = StyleSheet.create({})





















import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Getstart from '../components/Getstart';
import Login from '../components/Login'; // create this next if not yet done

const Stack = createNativeStackNavigator();

export default function index() {
  return (
    
      <Stack.Navigator initialRouteName="Getstart">
        <Stack.Screen
          name="Getstart"
          component={Getstart}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
   
  );
}





