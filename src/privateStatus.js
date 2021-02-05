import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";
import 'react-native-gesture-handler';
import {basicFont} from '../App';
import Feather from 'react-native-vector-icons/Feather';
import { ProgressBar } from 'react-native-paper';

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


const titleTitle= {
    fontFamily: basicFont,
    fontSize: 32,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 44.8,
    letterSpacing: 0,
    color: "#000000",
    paddingTop: 40,
    paddingLeft: 21
};

const caption = {
  fontFamily: basicFont,
  fontSize: 14,
  fontWeight: "normal",
  fontStyle: "normal",
  paddingLeft: 19,
  lineHeight: 22.4,
  letterSpacing: 0,
  color: colors.blue
};

const informBox = {
  width: 375,
  height: 32,
  paddingTop: 23,
};

const text = {
    fontFamily: basicFont,
  fontSize: 16,
  fontWeight: "normal",
  fontStyle: "normal",
  paddingTop: 12,
  paddingLeft: 22,
  paddingRight: 10,
  paddingBottom: 12,
  lineHeight: 28,
  letterSpacing: 0,
  color: "#000000"
};

const textContent = {
    fontFamily: basicFont,
  fontSize: 14,
  fontWeight: "normal",
  fontStyle: "normal",
   paddingTop: 12,
  paddingLeft: 22,
  paddingBottom: 12,
  letterSpacing: 0,
  color: "#000000"
};

const textContentInBox = {
    fontFamily: basicFont,
  fontSize: 14,
  fontWeight: "normal",
  fontStyle: "normal",
  paddingLeft: 0,
  letterSpacing: 0,
  color: "#000000"
};

const rectangle = {
  width: 327,
  height: 222,
  marginLeft: 20,
  marginBottom: 16,
  marginRight: 26,
  padding: 10,
  borderRadius: 3.3,
  borderStyle: "solid",
  borderWidth: 1.1,
  borderColor: "#cecece"
};


const menuBox = {
  height: 84,
  backgroundColor: colors.flatBlueSkyLight,
  flexDirection: 'row',
  justifyContent: 'space-around',
  shadowColor: "rgba(0, 0, 0, 0.24)",
  shadowOffset: {
    width: 0,
    height: 8
  },
  shadowRadius: 20,
  shadowOpacity: 1
};

const menuBoxText = {
  width: 60,
  height: 20,
  fontFamily: basicFont,
  fontSize: 12,
  fontWeight: "normal",
  fontStyle: "normal",
  lineHeight: 19.2,
  letterSpacing: 0,
  textAlign: "center",
  color: colors.black
};


const menuBoxTextChoiced = {
  width: 60,
  height: 20,
  fontFamily: basicFont,
  fontSize: 12,
  fontWeight: "normal",
  fontStyle: "normal",
  lineHeight: 19.2,
  letterSpacing: 0,
  textAlign: "center",
  color: colors.blue
};

const barLayer ={
  width: 179,
  height: 10,
  marginTop: 20,
  marginRight: 20,
  paddingRight: 20,
  backgroundColor: colors.signatureBlue2
}

const certificateBox ={
 width: 90,
 height:40,
 borderRadius: 4,
 backgroundColor: colors.signatureBlue2,
 marginTop:5,
 marginRight:5,
}

const certText = {
    fontFamily: basicFont,
  fontSize: 16,
  fontWeight: "normal",
  fontStyle: "normal",
  paddingTop: 7,
  paddingLeft: 22,
  paddingRight: 10,
  paddingBottom: 12,
  lineHeight: 28,
  letterSpacing: 0,
  color: "#000000"
};

const privateStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        backgroundColor: colors.white,
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: 17.4
    },
    scrollView: {
    backgroundColor: colors.white,
    },
    layoutBarLeftTitle :{
    height: 146
    },
    interestBox : {
    height: 56
    },
    title: titleTitle,
    caption: caption,
    text: text,
    textContent: textContent,
    textContentInBox: textContentInBox,
    box: rectangle,
    inform: informBox,
    menu: menuBox,
    menuText: menuBoxText,
    menuTextChoiced : menuBoxTextChoiced,
    barLayer : barLayer,
    cert : certificateBox,
    certText: certText,
});


function privateScreen({navigation}) {
  return (
    <SafeAreaView style={privateStyle.container}>
      <ScrollView style={privateStyle.scrollView}>
        <View style ={privateStyle.layoutBarLeftTitle}>
            <Text style ={privateStyle.title}>내 BONGO{"\n"}프로필</Text>
        </View>
        <View style = {{borderBottomWidth: 1, borderColor:"#cecece", flexDirection: 'row', justifyContent:'space-between'}}>
          <Text style ={privateStyle.caption}>이런 평가를 받았어요</Text>
          <Feather style ={{textAlign:'right', marginRight: 15,}}
                      name ="arrow-right"
                      color ="black"
                      size={20}/>
        </View>
        <View style = {{borderBottomWidth: 1, borderColor:"#cecece", flexDirection: 'row', justifyContent:'space-between'}}>
          <Text style ={privateStyle.text}>평점 점수</Text>
          <Text style ={privateStyle.text}> 80</Text>
          <ProgressBar style ={privateStyle.barLayer} progress={0.8} color = {colors.blue} />
        </View>
        <View style = {{borderBottomWidth: 1, borderColor:"#cecece", flexDirection: 'row', justifyContent:'space-between' }}>
          <Text style ={privateStyle.text}>자격증</Text>
        <ScrollView horizontal pagingEnabled style={{marginLeft: 50}}>
          <View style ={privateStyle.cert}>
            <Text style ={privateStyle.certText}>건축기사</Text>
          </View>
            <View style ={privateStyle.cert}>
            <Text style ={privateStyle.certText}>전기기사</Text>
          </View>
          <View style ={privateStyle.cert}>
            <Text style ={privateStyle.certText}>토목기사</Text>
          </View>
            <View style ={privateStyle.cert}>
            <Text style ={privateStyle.certText}>소방기사</Text>
          </View>
        </ScrollView>
        </View>
        <View style ={{marginTop : 20}}>
        <View style ={privateStyle.informBox}>
          <Text style ={privateStyle.caption}>상세 정보</Text>
        </View>
        </View>
        <View style={privateStyle.interestBox}>
            <Text style ={privateStyle.text}>인증 분야</Text>
        </View>
        <View style = {{borderBottomWidth: 1, borderColor:"#cecece", flexDirection: 'row', justifyContent:'space-between' }}>
          <Text style ={privateStyle.text}>이름</Text>
        </View>
        <View style = {{borderBottomWidth: 1, borderColor:"#cecece", flexDirection: 'row', justifyContent:'space-between' }}>
          <Text style ={privateStyle.text}>생년월일</Text>
        </View>
        <View style = {{borderBottomWidth: 1, borderColor:"#cecece", flexDirection: 'row', justifyContent:'space-between' }}>
          <Text style ={privateStyle.text}>성별</Text>
        </View>
        <View style = {{borderBottomWidth: 1, borderColor:"#cecece", flexDirection: 'row', justifyContent:'space-between' }}>
          <Text style ={privateStyle.text}>계좌 번호</Text>
        </View>
          <Text style ={privateStyle.textContent}>소개글</Text>
          <View style={privateStyle.box}>
              <Text style ={privateStyle.textContentInBox}>
                안녕하세요{"\n"}전기라면 모르는 것이 없는{"\n"}김봉고입니다.{"\n\n"}저는 전기 시공,마감 등 모든 분야를 {"\n"}잘 할 수 있습니다.{"\n"}
              </Text>
            </View>
        </ScrollView>
        <View style ={privateStyle.menu}>
            <View style ={{marginTop:20}}>
                <TouchableOpacity 
                    onPress={() => navigation.navigate('main')}>
                    <Feather
                        style ={{textAlign:'center'}}
                        name ="dollar-sign"
                        color ="black"
                        size={25}/>
                    <Text style={privateStyle.menuText}>정산</Text>
                </TouchableOpacity>
            </View>
            <View style ={{marginTop:20}}>
                <TouchableOpacity 
                    onPress={() => navigation.navigate('main')}>
                    <Feather
                        style ={{textAlign:'center'}}
                        name ="home"
                        color ="black"
                        size={25}/>
                    <Text style={privateStyle.menuText}>메인</Text>
                </TouchableOpacity>
            </View>
            <View style ={{marginTop:20}}>
                <TouchableOpacity 
                    onPress={() => {}}>
                <Feather
                    style ={{textAlign:'center'}}
                    name ="user"
                    color ="blue"
                    size={25}/>
                <Text style={privateStyle.menuTextChoiced}>내 프로필</Text>
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
  );
}

export default privateScreen;