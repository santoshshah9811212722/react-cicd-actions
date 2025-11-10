// import { StyleSheet, Text, View } from 'react-native';

// export default function Login() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Welcome to Login Page</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#fff',
//   },
//   text: {
//     fontSize: 22,
//     fontWeight: 'bold',
//   },
// });







import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Login() {
  const [activeForm, setActiveForm] = useState('login'); // "login" | "signup" | "register"
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = () => {
    const { name, email, password, confirmPassword } = formData;

    if ((activeForm === 'signup' || activeForm === 'register') && password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    alert(`${activeForm.toUpperCase()} SUCCESSFUL!\nEmail: ${email}${name ? `\nName: ${name}` : ''}`);
    setFormData({ name: '', email: '', password: '', confirmPassword: '' });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>
        {activeForm === 'login'
          ? 'Welcome Back!'
          : activeForm === 'signup'
          ? 'Create an Account'
          : 'Register Your Details'}
      </Text>

      {/* --- LOGIN FORM --- */}
      {activeForm === 'login' && (
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#999"
            keyboardType="email-address"
            value={formData.email}
            onChangeText={(v) => handleChange('email', v)}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#999"
            secureTextEntry
            value={formData.password}
            onChangeText={(v) => handleChange('password', v)}
          />
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <Text style={styles.switchLabel}>Don’t have an account?</Text>
          <TouchableOpacity onPress={() => setActiveForm('signup')}>
            <Text style={styles.linkText}>Sign Up</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setActiveForm('register')}>
            <Text style={[styles.linkText, { marginTop: 10 }]}>Register</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* --- SIGNUP FORM --- */}
      {activeForm === 'signup' && (
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#999"
            keyboardType="email-address"
            value={formData.email}
            onChangeText={(v) => handleChange('email', v)}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#999"
            secureTextEntry
            value={formData.password}
            onChangeText={(v) => handleChange('password', v)}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            placeholderTextColor="#999"
            secureTextEntry
            value={formData.confirmPassword}
            onChangeText={(v) => handleChange('confirmPassword', v)}
          />
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>

          <Text style={styles.switchLabel}>Already have an account?</Text>
          <TouchableOpacity onPress={() => setActiveForm('login')}>
            <Text style={styles.linkText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setActiveForm('register')}>
            <Text style={[styles.linkText, { marginTop: 10 }]}>Register</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* --- REGISTER FORM --- */}
      {activeForm === 'register' && (
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            placeholderTextColor="#999"
            value={formData.name}
            onChangeText={(v) => handleChange('name', v)}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#999"
            keyboardType="email-address"
            value={formData.email}
            onChangeText={(v) => handleChange('email', v)}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#999"
            secureTextEntry
            value={formData.password}
            onChangeText={(v) => handleChange('password', v)}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            placeholderTextColor="#999"
            secureTextEntry
            value={formData.confirmPassword}
            onChangeText={(v) => handleChange('confirmPassword', v)}
          />
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>

          <Text style={styles.switchLabel}>Already registered?</Text>
          <TouchableOpacity onPress={() => setActiveForm('login')}>
            <Text style={styles.linkText}>Login</Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 25,
    backgroundColor: '#f5f5f5',
    paddingVertical: 40,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 25,
  },
  form: {
    width: '100%',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#007bff',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  switchLabel: {
    fontSize: 15,
    color: '#666',
    textAlign: 'center',
    marginBottom: 5,
  },
  linkText: {
    color: '#007bff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '500',
  },
});


