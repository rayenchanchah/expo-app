import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';

export default function App() {
  const handlePress = () => {
    Alert.alert("Welcome");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      
      <Text style={styles.label}>Username:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your username"
      />
      
      <Text style={styles.label}>Password:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        secureTextEntry
      />
      
      <Text style={styles.label}>Full Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your full name"
      />
      
      <Text style={styles.label}>Address:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your address"
      />
      
      <Text style={styles.label}>Date of Birth:</Text>
      <TextInput
        style={styles.input}
        placeholder="MM/DD/YYYY"
        keyboardType="numeric"
      />
      
      <View style={styles.buttonContainer}>
        <Button title="Submit" color="#6200ee" onPress={handlePress} />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    color: '#333',
    fontWeight: 'bold',
    marginBottom: 40,
  },
  label: {
    fontSize: 16,
    color: '#666',
    alignSelf: 'flex-start',
    marginBottom: 5,
    marginTop: 10,
  },
  input: {
    width: '100%',
    fontSize: 16,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
  },
  buttonContainer: {
    width: '100%',
    marginTop: 20,
    borderRadius: 5,
    overflow: 'hidden',  // Keeps button corners rounded within container
  },
});
