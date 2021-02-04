import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, Alert ,Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image style={styles.logoContainer} source={require("./src/images/logoWHite.svg")} />
      <View style={styles.signUp}>
      <Button style ={styles.signUpLayer}
        title="회원 가입"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
      </View>
      <View style={styles.login}>
      <Button style ={styles.loginLayer}
        title="로그인"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
      </View>
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

const colors = {
  blue: "#0036d5",
  flatBlueSkyLight: "#fdfeff",
  lightGray: "#d0d0d0",
  signatureBlue: "#0047cc"
};

const loginCopy = {
  width: 331,
  height: 55,
  borderRadius: 27.6,
  borderStyle: "solid",
  borderWidth: 1.7,
  borderColor: colors.white
};

const login = {
  width: 331,
  height: 55,
  borderRadius: 27.6,
  borderStyle: "solid",
  borderWidth: 1.7,
  backgroundColor: colors.white
};

const signUpLayer = {
  width: 142,
  height: 26,
  fontFamily: "NotoSansCJKkr",
  fontSize: 17.7,
  fontWeight: "bold",
  fontStyle: "normal",
  letterSpacing: 0.44,
  textAlign: "center",
  color: colors.white
};

const loginLayer = {
  width: 286,
  height: 26,
  fontFamily: "NotoSansCJKkr",
  fontSize: 17.7,
  fontWeight: "bold",
  fontStyle: "normal",
  letterSpacing: 0.44,
  textAlign: "center",
  color: colors.blue
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.signatureBlue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer:{
    width: 200,
    height: 200
  },
  signUp: loginCopy,
  signUpLayer : signUpLayer,
  loginLayer : loginLayer,
  login: login, 
});


