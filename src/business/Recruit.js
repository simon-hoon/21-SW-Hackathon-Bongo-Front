import React, {useState} from "react";
import { StyleSheet, Text, View, ScrollView, Button, Alert, Image, TouchableOpacity, TextInput } from "react-native";
import 'react-native-gesture-handler';
import {basicFont} from '../../App';
import Feather from 'react-native-vector-icons/Feather'
import DropDownPicker from 'react-native-dropdown-picker';

import logo from '../images/logoWhite.png';
import constructImg from '../images/iconStrockErectWhite.png';
import electricImg from '../images/iconStrockElectBlue.png';
import deliveryImg from '../images/iconStrockDeliveryBlue.png';
import simpleImg from '../images/iconStrockSimpleBlue.png';

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

const recruitPage = StyleSheet.create({
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
    color: "#000000",
    marginBottom: 10
  },
  title: titleTitle,
  nextBtn: {
    alignSelf: 'stretch',
    height: 55,
    borderRadius: 27.6,
    backgroundColor: "#d1d1d1",
    marginTop: 50
  },
  nextBtnActive: {
    alignSelf: 'stretch',
    height: 55,
    borderRadius: 27.6,
    backgroundColor: colors.signatureBlue,
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
  seperation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  seperation_menus: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 10,
    paddingLeft: 35,
    paddingRight: 35
  },
  interestBox: {
    width: 144,
    height: 130,
    opacity: 0.7,
    borderRadius: 10.7,
    borderStyle: "solid",
    borderWidth: 2.1,
    borderColor: '#f3f3f3'
  },
  interestBoxActive: {
    width: 144,
    height: 130,
    opacity: 0.7,
    borderRadius: 10.7,
    borderStyle: "solid",
    borderWidth: 2.1,
    borderColor: colors.blue
  },
  interestLabel: {
    color: colors.blue,
    textAlign: 'center',
    marginTop: 5
  },
  inputBox: {
    width: '100%',
    height: 44,
    opacity: 0.7,
    borderRadius: 3.3,
    borderStyle: "solid",
    borderWidth: 1.1,
    borderColor: "#cecece",
    paddingLeft: 10,
    marginBottom: 10
  },
  NinputBox: {
    width: '100%',
    height: 140,
    opacity: 0.7,
    borderRadius: 3.3,
    borderStyle: "solid",
    borderWidth: 1.1,
    borderColor: "#cecece",
    paddingLeft: 10,
    marginBottom: 10
  },
  SinputBox: {
    width: 275,
    height: 44,
    opacity: 0.7,
    borderRadius: 3.3,
    borderStyle: "solid",
    borderWidth: 1.1,
    borderColor: "#cecece",
    paddingLeft: 10
  },
  logoContainer:{
    width: 35,
    height: 35,
    marginTop: 10
  },
  workBtn:{
    width: 56,
    height: 56,
    backgroundColor: "#ffffff",
    borderRadius: 28,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center'
  },
  workBtnActive:{
    width: 56,
    height: 56,
    backgroundColor: "#0046d5",
    borderRadius: 28,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center'
  },
  checkBtn: {
    width: 74,
    height: 44,
    opacity: 0.7,
    borderRadius: 3.3,
    backgroundColor: "#b0b0b0",
    marginLeft: 10
  },
  checkBtnLabel: {
    fontFamily: basicFont,
    fontSize: 15,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0.44,
    textAlign: "center",
    color: colors.white,
    paddingTop: 15
  },
  left: {
    alignItems: 'flex-start'
  }
});

function recruitScreen({navigation}){
  const [interests, setInterests] = useState([0,0,0,0]);
  var interestNames = ["건축", "전기", "배달", "단순작업"];
  var isDone = false;

  var times = [{label:'시간', value: 'default'}];
  for (var i = 0; i < 24; i++) {
    times.push({label:i+'시', value: i});
  }

  function toggleInterest(name) {
    var index = interestNames.indexOf(name);

    if (index == -1) {
      return false;
    }

    interests[index] = interests[index] ? 0 : 1;
    setInterests({...interests});
  }

  for (var i = 0; i < Object.keys(interests).length; i++) {
    if (interests[i] == 1) {
      isDone = true;
      break;
    }
  }

  return (
    <ScrollView style={recruitPage.container}>
      <View style={recruitPage.seperation_menus}>
        <View>
          <TouchableOpacity style={recruitPage.workBtnActive}>
            <Image style={recruitPage.logoContainer} source={constructImg} />
          </TouchableOpacity>
          <Text style={recruitPage.interestLabel}>건설</Text>
        </View>

        <View>
          <TouchableOpacity style={recruitPage.workBtn}>
            <Image style={recruitPage.logoContainer} source={electricImg} />
          </TouchableOpacity>
          <Text style={recruitPage.interestLabel}>전기</Text>
        </View>

        <View>
          <TouchableOpacity style={recruitPage.workBtn}>
            <Image style={recruitPage.logoContainer} source={deliveryImg} />
          </TouchableOpacity>
          <Text style={recruitPage.interestLabel}>배달</Text>
        </View>

        <View>
          <TouchableOpacity style={recruitPage.workBtn}>
            <Image style={recruitPage.logoContainer} source={simpleImg} />
          </TouchableOpacity>
          <Text style={recruitPage.interestLabel}>단순작업</Text>
        </View>
      </View>

      <Text style ={recruitPage.text}>제목</Text>
      <TextInput
        style ={recruitPage.inputBox} 
        autoCapitalize = "none"/>

      <Text style ={recruitPage.text}>시간</Text>
      <View style={recruitPage.seperation}>
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
        <DropDownPicker
          items={times}
          defaultValue="default"
          containerStyle={{height: 44, width: 100}}
          style={{backgroundColor: '#ffffff', width: 100}}
          itemStyle={{
              justifyContent: 'flex-start'
          }}
          dropDownStyle={{backgroundColor: '#fafafa'}}
        />
        <DropDownPicker
          items={times}
          defaultValue="default"
          containerStyle={{height: 44, width: 100}}
          style={{backgroundColor: '#ffffff', width: 100}}
          itemStyle={{
              justifyContent: 'flex-start'
          }}
          dropDownStyle={{backgroundColor: '#fafafa'}}
        />
      </View>

      <Text style ={recruitPage.text}>일급</Text>
      <TextInput
        style ={recruitPage.inputBox} 
        autoCapitalize = "none"/>

      <Text style ={recruitPage.text}>예치금</Text>
      <View style={[recruitPage.seperation, recruitPage.left]}>
        <TextInput
          style ={recruitPage.SinputBox} 
          autoCapitalize = "none"/>
        <TouchableOpacity 
          style={recruitPage.checkBtn}>
            <Text style={recruitPage.checkBtnLabel}>자동충전</Text>
        </TouchableOpacity>
      </View>

      <Text style ={recruitPage.text}>소개</Text>
      <TextInput
        style ={recruitPage.NinputBox} 
        autoCapitalize = "none"
        multiline/>


      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity style={recruitPage.nextBtnActive}
        onPress={() => navigation.navigate('setInterest')}>
          <Text style={recruitPage.nextBtnLabel}>모집하기</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export default recruitScreen