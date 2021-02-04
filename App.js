import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, Alert ,Image, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import logo from './src/images/logoWhite.png';

const colors = {
  blue: "#0036d5",
  flatBlueSkyLight: "#fdfeff",
  lightGray: "#d0d0d0",
  signatureBlue: "#0047cc",
  white: "#ffffff"
};

const loginCopy = {
  width: 331,
  height: 55,
  borderRadius: 27.6,
  borderStyle: "solid",
  borderWidth: 1.7,
  borderColor: colors.white,
  marginTop: 200
};

const login = {
  width: 331,
  height: 55,
  borderRadius: 27.6,
  borderStyle: "solid",
  borderWidth: 1.7,
  borderColor: colors.white,
  backgroundColor: colors.white,
  marginTop: 15
};

const signUpLayer = {
  fontFamily: "NotoSansCJKkr",
  fontSize: 17.7,
  fontWeight: "bold",
  fontStyle: "normal",
  letterSpacing: 0.44,
  textAlign: "center",
  color: colors.white,
  paddingTop: 15
};

const loginLayer = {
  fontFamily: "NotoSansCJKkr",
  fontSize: 17.7,
  fontWeight: "bold",
  fontStyle: "normal",
  letterSpacing: 0.44,
  textAlign: "center",
  color: colors.blue,
  paddingTop: 15
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.signatureBlue,
    alignItems: 'center',
  },
  logoContainer:{
    width: 200,
    height: 200,
    marginTop: 107
  },
  signUp: loginCopy,
  signUpLayer : signUpLayer,
  loginLayer : loginLayer,
  login: login,
});


function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image style={styles.logoContainer} source={logo} />
      <TouchableOpacity style={styles.signUp}>
        <Text style={styles.signUpLayer}>회원가입</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.login}>
        <Text style={styles.loginLayer}>로그인</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}