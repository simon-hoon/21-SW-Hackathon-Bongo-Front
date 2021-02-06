import React, {useState} from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, SafeAreaView, ImageBackground, Image, ImageBase } from "react-native";
import 'react-native-gesture-handler';
import {basicFont} from '../App';
import Feather from 'react-native-vector-icons/Feather';
import { ProgressBar } from 'react-native-paper';
import { SwiperFlatList } from 'react-native-swiper-flatlist';

import logoClock from './images/iconStrockClock.png';
import logoStar from './images/iconStrockStar.png';
import logoEdit from './images/iconStrokeEdit.png';
import logoX from './images/iconStrokeClose.png';

import constructImg from './images/constBlue.png';
import electricImg from './images/iconStrockElectBlue.png';
import deliveryImg from './images/iconStrockDeliveryBlue.png';
import simpleImg from './images/iconStrockSimpleBlue.png';
import arrowImg from './images/iconStrokeArrowRight.png';
import { color } from "react-native-reanimated";


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
  padding: 7,
  letterSpacing: 0,
  color: "#000000",
  width: '100%'
};

const rectangle = {
  flex: 1,
  width: 327,
  height: 222,
  marginLeft: 20,
  marginBottom: 16,
  marginRight: 10,
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
    width: 312,
  height: 27,
  marginLeft: 22,
  marginBottom: 10,
  marginRight: 26,
  backgroundColor: colors.signatureBlue2
};

const completeStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        backgroundColor: colors.blue,
    },
    logoContainer:{
        width: 34,
        height: 34,
        marginTop: 10
    },
    logoMiniContainer:{
        width: 24,
        height: 24,
        marginTop: 12,
        marginLeft: 22,
        marginRight: -14,
    },
    scrollView: {
        marginTop: 90.5,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: colors.white,
    },
    emptyString :{
        width: 15
    },
    workBtnNonActive:{
      width: 56,
      height: 56,
      backgroundColor: colors.white,
      borderRadius: 28,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      alignItems: 'center',
      zIndex:9
    },
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
    nextBtnActive: {
      alignSelf: 'stretch',
      backgroundColor: '#d1d1d1',
      marginTop: 50,
      width: '90%',
      marginLeft: '5%',
      height: 55,
      borderRadius: 27.6,
    },
    nextBtn: {
      alignSelf: 'stretch',
      backgroundColor: colors.blue,
      marginTop: 50,
      width: '90%',
      marginLeft: '5%',
      height: 55,
      borderRadius: 27.6,
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
});



function detailScreen({navigation}){
    const [isDone, setDone] = useState(false);

      return (
    <View style={completeStyle.container}>
            <View style={{marginLeft:22, marginTop: 50, marginBottom:-120,}}>
                <TouchableOpacity style={completeStyle.workBtnNonActive}
                  onPress={() => navigation.navigate('main')}>
                    <Image style={completeStyle.logoContainer} source={constructImg} />
                </TouchableOpacity>
            </View>
      <ScrollView style={completeStyle.scrollView}>
        <View style = {{marginTop: 30, flexDirection: 'row', justifyContent:'space-between'}}>
          <Text style ={completeStyle.caption}>건설</Text>
        </View>
        <View style={{height: 56, marginBottom:45, marginTop:10}}>
            <Text style ={[completeStyle.text, {fontWeight:"bold", fontSize:32, lineHeight:44.8}]}>오늘 10시간 강남구 건설{"\n"}관련 업무자</Text>
        </View>
        <View style = {{borderBottomWidth: 1, borderColor:"#cecece", flexDirection: 'row'}}>
           <Image style={completeStyle.logoMiniContainer} source={logoClock} />
          <Text style ={completeStyle.text}>시간</Text>
          <Text style ={completeStyle.emptyString}></Text>
          <Text style ={completeStyle.text}>10:00-15:00</Text>
        </View>
        <View style = {{borderBottomWidth: 1, borderColor:"#cecece", flexDirection: 'row' }}>
          <Image style={completeStyle.logoMiniContainer} source={logoStar} />
          <Text style ={completeStyle.text}>일급</Text>
          <Text style ={completeStyle.emptyString}></Text>
          <Text style ={completeStyle.text}>100,000원</Text>
        </View>
        <View style ={{marginTop : 10}}>
        </View>
          <Text style ={completeStyle.textContent}>소개</Text>
          <View style={completeStyle.box}>
              <Text style ={completeStyle.textContentInBox}>
                안녕하세요{"\n"}SW 건설입니다.{"\n\n"}건설 시공, 마감을 주로 하는 회사입니다.
              </Text>
          </View>

          <Text style ={completeStyle.caption}>세부정보</Text>
          <View style = {{borderBottomWidth: 1, borderColor:"#cecece", flexDirection: 'row'}}>
            <Text style ={[completeStyle.text, {width:120}]}>모집 인원</Text>
            <Text style ={completeStyle.emptyString}></Text>
            <Text style ={completeStyle.text}>2명</Text>
          </View>

          <View style = {{borderBottomWidth: 1, borderColor:"#cecece", flexDirection: 'row'}}>
            <Text style ={[completeStyle.text, {width:120}]}>업무 소개</Text>
            <Text style ={completeStyle.emptyString}></Text>
            <Text style ={completeStyle.text}>건설 마감 시공</Text>
          </View>

          <View style = {{borderBottomWidth: 1, borderColor:"#cecece", flexDirection: 'row'}}>
            <Text style ={[completeStyle.text, {width:120}]}>예치금</Text>
            <Text style ={completeStyle.emptyString}></Text>
            <Text style ={completeStyle.text}>50,000원</Text>
          </View>

          <View style={{alignItems:'center'}}>
            <TouchableOpacity style={[isDone ? completeStyle.nextBtnActive : completeStyle.nextBtn]}
              onPress={() => setDone(true)}>
                <Text style={completeStyle.nextBtnLabel}>{isDone ? '탑승 완료' : '탑승 신청'}</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
    </View>
  );
}

export default detailScreen;