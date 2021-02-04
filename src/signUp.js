import React from "react";
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity, TextInput } from "react-native";
import 'react-native-gesture-handler';
import {basicFont} from '../App';
import Feather from 'react-native-vector-icons/Feather'

const colors = {
  blue: "#0036d5",
  flatBlueSkyLight: "#fdfeff",
  signatureBlue: "#0047cc",
  veryLightPink: "#d0d0d0",
  lightGray: "#ededed",
  white: "#ffffff",
  textMiscBtnCenterBlackStyle: "#0b0b0b",
  veryLightPinkTwo: "#b7b7b7",
  signatureBlue2: "rgba(0, 71, 204, 0.2)",
  colorPrimary500: "#00d5a7"
};

////////////////// contents layout ///////////////

const pageBackTitle= {
    width: 375,
        height: 60
};

const layoutBarForTitle= {
    width: 375,
        height: 117
};

const titleTitle= {
    fontFamily: basicFont,
    fontSize: 32,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 44.8,
    letterSpacing: 0,
    color: "#000000",
    paddingTop: 10
};
const choiceClickedOn= {
    width: 158,
    height: 44,
    borderRadius: 11,
    borderStyle: "solid",
    borderWidth: 1.7,
    borderColor: colors.blue,
};

const choiceClickedOff= {
    width: 158,
    height: 44,
    borderRadius: 11,
    borderStyle: "solid",
    borderWidth: 1.7,
    borderColor: "#9b9b9b"
};

const rectangleMail = {
  width: 243,
  height: 44,
  opacity: 0.7,
  borderRadius: 3.3,
  borderStyle: "solid",
  borderWidth: 1.1,
  borderColor: "#cecece"
};

const rectanglePwd = {
  width: 331,
  height: 44,
  opacity: 0.7,
  borderRadius: 3.3,
  borderStyle: "solid",
  borderWidth: 1.1,
  borderColor: "#cecece"
};
////////////////////////////////////

/////////////// text layout //////////

const notChoiceLayer = {
  fontFamily: basicFont,
  fontSize: 14.4,
  fontWeight: "bold",
  fontStyle: "normal",
  letterSpacing: 0,
  textAlign: "center",
  color: "#9b9b9b",
  paddingTop: 10
};

const choiceLayer = {
  fontFamily: basicFont,
  fontSize: 14.4,
  fontWeight: "bold",
  fontStyle: "normal",
  letterSpacing: 0,
  textAlign: "center",
  color: colors.blue,
  paddingTop: 10
};


const layerMail= {
  width: 243,
  height: 44,
  opacity: 0.7,
  borderRadius: 3.3,
  borderStyle: "solid",
  borderWidth: 1.1,
  borderColor: "#cecece"
};

const layer= {
  width: 331,
  height: 44,
  opacity: 0.7,
  borderRadius: 3.3,
  borderStyle: "solid",
  borderWidth: 1.1,
  borderColor: "#cecece"
};

const layerBirth= {
    width: 332,
        height: 22.1,
        fontFamily: "NotoSansCJKkr",
        fontSize: 14.4,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#000000"
};

const layerSex= {
    width: 343,
        height: 22.1,
        fontFamily: "NotoSansCJKkr",
        fontSize: 14.4,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#000000"
};

const layerAddr= {
    width: 123,
        height: 22.1,
        fontFamily: "NotoSansCJKkr",
        fontSize: 14.4,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#000000"
};

const layerAddrDetail= {
    width: 299,
        height: 19,
        fontFamily: "NotoSansCJKkr",
        fontSize: 14.4,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#000000"
};

////////////////////////////////////////////////////////

const signUpPage = StyleSheet.create({
  container: {
    flex: 1,
    padding: 21,
    backgroundColor: colors.white,
  },
  header: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingBottom: 17.4
  },
  text: {
    flex: 1,
    fontFamily: basicFont,
    fontSize: 14.4,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    paddingBottom: -20,
    color: "#000000"
  },
  seperation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: titleTitle,
  notChoice: notChoiceLayer,
  choice: choiceLayer,
  ClickedOn: choiceClickedOn,
  ClickedOff: choiceClickedOff,
  mail: layerMail,
  mailBox : rectangleMail,
  pwdBox : rectanglePwd,
  layer: layer,
  Birth : layerBirth,
  Sex: layerSex,
  Addr: layerAddr,
  AddrDetail: layerAddrDetail,
});

function signUpScreen({navigation}){
  return (
    <View style={signUpPage.container}>
        <View style ={signUpPage.header}>
            <Text style ={signUpPage.title}>안녕하세요.{"\n"}BONGO입니다!</Text>
        </View>
            <Text style ={signUpPage.text}>사용자를 알려주세요</Text>
        <View style ={signUpPage.seperation}>
        <TouchableOpacity 
      style={signUpPage.ClickedOn}
      onPress={() => Alert.alert('just clicked')}>
        <Text style={signUpPage.choice}>일반 사용자</Text>
      </TouchableOpacity>
              <TouchableOpacity 
      style={signUpPage.ClickedOff}
      onPress={() => Alert.alert('just clicked')}>
        <Text style={signUpPage.notChoice}>업체 사용자</Text>
      </TouchableOpacity>
      </View>
    <Text style ={signUpPage.text}>이메일</Text>
        <TextInput 
            placeholder = "정확하게 입력해주세요"
            style ={signUpPage.mail} 
            autoCapitalize = "none"/>
        <Text style ={signUpPage.text}>비밀번호</Text>
        <TextInput 
            placeholder = "6~15자의 영문, 숫자조합으로 입력해주세요."
            style ={signUpPage.pwdBox} 
            autoCapitalize = "none"/>
       <Text style ={signUpPage.text}>비밀번호 확인</Text>
        <TextInput
            style ={signUpPage.layer} 
            autoCapitalize = "none"/>
       <Text style ={signUpPage.text}>이름</Text>
        <TextInput
            style ={signUpPage.layer} 
            autoCapitalize = "none"/>
<Text style ={signUpPage.text}>생년월일</Text>
      <View style ={signUpPage.Sex}>
            <Text style ={signUpPage.text}>성별</Text>
        </View>
        <View style ={signUpPage.seperation}>
        <TouchableOpacity 
      style={signUpPage.ClickedOn}
      onPress={() => Alert.alert('just clicked')}>
        <Text style={signUpPage.choice}>여자</Text>
      </TouchableOpacity>
              <TouchableOpacity 
      style={signUpPage.ClickedOff}
      onPress={() => Alert.alert('just clicked')}>
        <Text style={signUpPage.notChoice}>남자</Text>
      </TouchableOpacity>
      </View>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
      title="뒤로(디버깅용)"
      onPress={() => navigation.push('home')}
    />
    </View>
    </View>
  );
}

export default signUpScreen