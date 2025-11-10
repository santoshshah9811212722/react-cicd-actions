// Login.js
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './css/Getstart';
export default function Getstart() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <View>
            <Image  source={require('./../assets/images/lady.jpg')} 
            style={{ width: '100%', height: 600, aspectRatio: 19.5 / 25, resizeMode: 'cover', }} />
            <Text style={styles.overlayText}>Ai Dream Travel</Text>
        </View>
        
        <View style={styles.funtravelcontainer}>
            <Text style={styles.funtravel}>FUN TRAVEL</Text>
        </View>
        
         <View style={styles.container}>
      <LinearGradient
        colors={['#ff00ff', '#ff9900']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradientButton}
      >
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
      
    </View>
  )
}
