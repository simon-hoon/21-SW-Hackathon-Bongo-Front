import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, SafeAreaView, Image } from "react-native";
import 'react-native-gesture-handler';
import {basicFont} from '../App';
import LogoImg from './images/logoColor.png';

const colors = {
  blue: "#0036d5",
  flatBlueSkyLight: "#fdfeff",
  signatureBlue: "#0047cc",
  veryLightPink: "#d0d0d0",
  white: "#ffffff",
  lightGray: "#ededed",
  textMiscBtnCenterBlackStyle: "#0b0b0b",
  veryLightPinkTwo: "#b7b7b7",
  signatureBlue2: "rgba(0, 71, 204, 0.2)",
  colorPrimary500: "#00d5a7",
  steel10: "rgba(142, 142, 147, 0.1)"
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    title: {
        fontFamily: basicFont,
        fontSize: 32,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 44.8,
        letterSpacing: 0,
        color: "#000000",
        paddingTop: 40,
        paddingLeft: 21
    },
    mainText: {
      fontFamily: basicFont,
      fontSize: 32,
      fontWeight: "bold",
      fontStyle: "normal",
      lineHeight: 44.8,
      letterSpacing: 0,
      color: "#000000",
      textAlign: 'center',
      marginTop: 170
    }
});


function welcomeScreen({navigation}) {
  function enter(){
    console.log('work');
    navigation.navigate('main');
  }

  setTimeout(enter, 2500);

  return (
    <View style={[style.container, {alignItems:'center'}]}>
      <Image style={{width:235, height:235, marginTop:150}} source={LogoImg}/>
      <Text style={style.mainText}>
        환영합니다!{"\n"}봉고 탑승 완료
      </Text>
    </View>
  );
}

export default welcomeScreen;