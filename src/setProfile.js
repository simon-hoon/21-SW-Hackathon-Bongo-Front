import React from "react";
import { StyleSheet, Text, View, ScrollView, Button, Alert, TouchableOpacity, TextInput } from "react-native";
import 'react-native-gesture-handler';
import {basicFont} from '../App';
import Feather from 'react-native-vector-icons/Feather'
import DropDownPicker from 'react-native-dropdown-picker';

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
    width: 180,
    height: 44,
    borderRadius: 11,
    borderStyle: "solid",
    borderWidth: 1.7,
    borderColor: colors.blue,
};

const choiceClickedOff= {
    width: 180,
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
  width: 327,
  height: 283,
  opacity: 0.7,
  borderRadius: 3.3,
  borderStyle: "solid",
  borderWidth: 1.1,
  borderColor: "#cecece",
  paddingLeft: 10,
  paddingTop: 10
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
  width: 227,
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
    padding: 22,
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
  nextBtn: {
    alignSelf: 'stretch',
    height: 55,
    borderRadius: 27.6,
    backgroundColor: "#d1d1d1",
    marginTop: 50
  },
  nextBtnLabel: {
    fontFamily: basicFont,
    fontSize: 17.7,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0.44,
    textAlign: "center",
    color: colors.white,
    paddingTop: 15
  },
  bankWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  bankNm: {
    flexDirection: 'row',
    width: 100
  },
  bankInfo: {
    width: 300,
    marginLeft: 15
  },
});


function profileScreen({navigation}){
  return (
    <ScrollView style={signUpPage.container}>
        <View style ={signUpPage.header}>
            <Text style ={signUpPage.title}>더 자세한 정보가{"\n"}필요해요.</Text>
        </View>
        <Text style ={signUpPage.text}>예치금 환불 계좌</Text>
        <View style={signUpPage.bankWrap}>
          <View style={signUpPage.bankNm}>
            <DropDownPicker
              items={[
                  {label: '은행', value: 'default', hidden:true},
                  {label: '농협', value: 'NH'},
                  {label: '국민', value: 'KB'},
              ]}
              defaultValue="default"
              containerStyle={{height: 44, width: 100}}
              style={{backgroundColor: '#ffffff', width: 100}}
              itemStyle={{
                  justifyContent: 'flex-start'
              }}
              dropDownStyle={{backgroundColor: '#fafafa'}}
            />
          </View>
          <View style={signUpPage.bankInfo}>
            <TextInput 
                placeholder = "- 없이 입력해주세요."
                style ={signUpPage.mail} 
                autoCapitalize = "none"/>
          </View>
        </View>
        <Text style ={signUpPage.text}>소개글을 적어주세요!</Text>
        <TextInput 
            placeholder = "역량 위주로 작성하면 도움이 돼요!"
            style ={signUpPage.pwdBox} 
            multiline
            autoCapitalize = "none"/>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity style={signUpPage.nextBtn}
        onPress={() => navigation.navigate('main')}>
          <Text style={signUpPage.nextBtnLabel}>가입하기</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export default profileScreen