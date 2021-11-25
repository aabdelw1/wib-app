import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'


const SignUpScreen = () => (
  <View style={styles.container}>
  <Text>Sign Up Screen</Text>
    <Button title="Click Here" onPress={() => alert('Button Clicked!')} />
  </View>

)

export default SignUpScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '4361EE'
  }
})