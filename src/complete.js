import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, SafeAreaView, Image} from "react-native";
import 'react-native-gesture-handler';
import {basicFont} from '../App';
import { ProgressBar } from 'react-native-paper';
import { SwiperFlatList } from 'react-native-swiper-flatlist';

import logoClock from './images/iconStrockClock.png';
import logoStar from './images/iconStrockStar.png';
import logoEdit from './images/iconStrokeEdit.png';
import logoX from './images/iconStrokeCloseWhite.png';


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
  color: "#000000"
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
  width: 360,
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
});



function completeScreen({navigation}){
      return (
    <SafeAreaView style={completeStyle.container}>
            <View style={{marginLeft:22, marginTop: 50, marginBottom:-120, zIndex:7000,flexDirection: 'row', justifyContent:'space-between'}}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('main')}
                  style={completeStyle.workBtnNonActive}>
                    <Image style={completeStyle.logoContainer} source={logoEdit} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}>
                        <Image style ={{alignItems:'flex-end',justifyContent:'flex-end', marginRight : 16}} source={logoX}/>
              </TouchableOpacity>
            </View> 
           <SwiperFlatList index={0} showPagination  paginationDefaultColor={colors.white} 
            paginationStyle ={{width : 50, height: 50, marginTop: 14,}}
            paginationStyleItemInactive={{ width: 7, height: 7, borderStyle: "solid", borderWidth: 1.1, borderColor: "#979797"}}
            paginationStyleItemActive={{ width: 7, height: 7, backgroundColor: colors.blue}}>
      <ScrollView style={completeStyle.scrollView}>
        <View style = {{marginTop: 30, flexDirection: 'row', justifyContent:'space-between'}}>
          <Text style ={completeStyle.caption}>2021. 02. 12</Text>
        </View>
        <View style={{height: 56}}>
            <Text style ={completeStyle.text}>오늘 10시간 강남구 전기 관련 업무자</Text>
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
        <View style ={{marginTop : 20}}>
        <View style ={completeStyle.informBox}>
          <Text style ={completeStyle.caption}>받은 평가</Text>
        </View>
        </View>
        <View style = {{flexDirection: 'row'}}>
          <Text style ={completeStyle.text}>평가 점수  </Text>
          <Text style ={completeStyle.emptyString}></Text>
          <Text style ={completeStyle.text}>80점</Text>
        </View>
        <ProgressBar style ={completeStyle.barLayer} progress={0.7} color = {colors.blue} />
          <Text style ={completeStyle.textContent}>평가 이유</Text>
          <View style={completeStyle.box}>
              <Text style ={completeStyle.textContentInBox}>
                역시 자격증이 있으신 분이어서 그런지{"\n"}매우 꼼꼼하게 작업해주셨습니다.{"\n\n"}감사합니다.{"\n"}다음 봉고에서 봬요!{"\n"}
              </Text>
            </View>
        </ScrollView>
      <ScrollView style={completeStyle.scrollView}>
        <View style = {{marginTop: 30, flexDirection: 'row', justifyContent:'space-between'}}>
          <Text style ={completeStyle.caption}>2021. 05. 15</Text>
        </View>
        <View style={{height: 56}}>
            <Text style ={completeStyle.text}>새벽 5시부터 9시간 인테리어 작업해주실 분</Text>
        </View>
        <View style = {{borderBottomWidth: 1, borderColor:"#cecece", flexDirection: 'row'}}>
           <Image style={completeStyle.logoMiniContainer} source={logoClock} />
          <Text style ={completeStyle.text}>시간</Text>
          <Text style ={completeStyle.emptyString}></Text>
          <Text style ={completeStyle.text}>05:00-14:00</Text>
        </View>
        <View style = {{borderBottomWidth: 1, borderColor:"#cecece", flexDirection: 'row' }}>
          <Image style={completeStyle.logoMiniContainer} source={logoStar} />
          <Text style ={completeStyle.text}>일급</Text>
          <Text style ={completeStyle.emptyString}></Text>
          <Text style ={completeStyle.text}>240,000원</Text>
        </View>
        <View style ={{marginTop : 20}}>
        <View style ={completeStyle.informBox}>
          <Text style ={completeStyle.caption}>받은 평가</Text>
        </View>
        </View>
        <View style = {{flexDirection: 'row'}}>
          <Text style ={completeStyle.text}>평가 점수  </Text>
          <Text style ={completeStyle.emptyString}></Text>
          <Text style ={completeStyle.text}>95점</Text>
        </View>
        <ProgressBar style ={completeStyle.barLayer} progress={0.85} color = {colors.blue} />
          <Text style ={completeStyle.textContent}>평가 이유</Text>
          <View style={completeStyle.box}>
              <Text style ={completeStyle.textContentInBox}>
                실력이 확실합니다.{"\n\n"}다음에도 신청해주세요!{"\n"}
              </Text>
            </View>
        </ScrollView>
      <ScrollView style={completeStyle.scrollView}>
        <View style = {{marginTop: 30, flexDirection: 'row', justifyContent:'space-between'}}>
          <Text style ={completeStyle.caption}>2021. 08. 02</Text>
        </View>
        <View style={{height: 56}}>
            <Text style ={completeStyle.text}>9시간 서초동 전기 설비 수리</Text>
        </View>
        <View style = {{borderBottomWidth: 1, borderColor:"#cecece", flexDirection: 'row'}}>
           <Image style={completeStyle.logoMiniContainer} source={logoClock} />
          <Text style ={completeStyle.text}>시간</Text>
          <Text style ={completeStyle.emptyString}></Text>
          <Text style ={completeStyle.text}>10:00-19:00</Text>
        </View>
        <View style = {{flexDirection: 'row' }}>
          <Image style={completeStyle.logoMiniContainer} source={logoStar} />
          <Text style ={completeStyle.text}>일급</Text>
          <Text style ={completeStyle.emptyString}></Text>
          <Text style ={completeStyle.text}>200,000원</Text>
        </View>
        <View style ={{marginTop : 20}}>
        <View style ={completeStyle.informBox}>
          <Text style ={completeStyle.caption}>받은 평가</Text>
        </View>
        </View>
        <View style = {{flexDirection: 'row'}}>
          <Text style ={completeStyle.text}>평가 점수  </Text>
          <Text style ={completeStyle.emptyString}></Text>
          <Text style ={completeStyle.text}>60점</Text>
        </View>
        <ProgressBar style ={completeStyle.barLayer} progress={0.55} color = {colors.blue} />
          <Text style ={completeStyle.textContent}>평가 이유</Text>
          <View style={completeStyle.box}>
              <Text style ={completeStyle.textContentInBox}>
                오늘은 실수가 있으셨네요.{"\n"}그래도 책임지고 끝까지 해주셨습니다.{"\n\n"}감사합니다.{"\n"}다음 봉고에서 봬요!{"\n"}
              </Text>
            </View>
        </ScrollView>
        </SwiperFlatList> 
    </SafeAreaView>
  );
}

export default completeScreen