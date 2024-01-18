import React, { useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, Animated } from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from '../../Styles';
import OutlinedInput from '../../components/input';

// LoginPage Component
export default function LoginPage() {
  // useRef hook to create a reference to the animated view
  const animationRef = useRef(null);

  // useEffect hook to trigger the slideInUp animation when the component is mounted
  useEffect(() => {
    animationRef.current.slideInUp(800);
  }, []);

  return (
    <View style={styles.container}>
      {/* Button to trigger a login alert */}
      <TouchableOpacity style={styles.button_login} onPress={() => alert('Login')}>
        <Text style={styles.text_login}>Log In</Text>
      </TouchableOpacity>
      {/* Animated view for the login form */}
      <Animatable.View
        ref={animationRef}
        key="Rectangle 33"
        style={[styles.rectangle, { transform: [{ translateY: 0 }] }]}
        animation="slideInUp"
        duration={800}
        useNativeDriver
      >
        {/* Welcome text */}
        <View style={styles.welcomeContainer}>
          <Text key={"Title / 1"} style={styles.welcomeText}>Welcome Back</Text>
          <Text key={"Caption / 2"} style={{ fontWeight: "500", fontSize: 12, lineHeight: 16, paddingTop: 2 }}>Login to continue</Text>
        </View>

        {/* Image from local assets */}
        <Image source={require('../../assets/images/login_lock.png')} style={{ width: 150, height: 150, marginTop: 67, marginLeft: 116 }} />

        {/* Email and password input fields */}
        <View style={{ marginTop: 10 }}>
          <OutlinedInput placeholder="Email" type={"email"} style={{ marginTop: 32, marginLeft: 24, marginRight: 24 }} />
          <OutlinedInput placeholder="Password" type={"password"} style={{ marginTop: 32, marginLeft: 24, marginRight: 24 }} />

          {/* Animated text for the 'Forgot your password?' link */}
          <Animatable.Text
            style={{
              alignSelf: 'flex-end',
              marginTop: 10,
              marginRight: 26,
              fontFamily: 'Poppins-Bold',
              fontSize: 12,
              fontWeight: '500',
              color: '#CACACA',
            }}
            animation="fadeInUp"
            delay={500}
            useNativeDriver
          >
            Forgot your password?
          </Animatable.Text>
        </View>
      </Animatable.View>
    </View>
  );
}