import React, {useState} from "react";
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
    textAlign: 'center'
  },
});

function interestScreen({navigation}){
  const [interests, setInterests] = useState([0,0,0,0]);
  var interestNames = ["건축", "전기", "배달", "단순작업"];
  var isDone = false;

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
    <ScrollView style={signUpPage.container}>
      <View style ={signUpPage.header}>
          <Text style ={signUpPage.title}>관심 분야를{"\n"}선택하세요.</Text>
      </View>
      <View>
        <View style={signUpPage.seperation}>
          <TouchableOpacity style={[interests[0] == 1 ? signUpPage.interestBoxActive : signUpPage.interestBox]}
            onPress={() => toggleInterest('건축')}>
            <Text style={signUpPage.interestLabel}>건축</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[interests[1] == 1 ? signUpPage.interestBoxActive : signUpPage.interestBox]}
            onPress={() => toggleInterest('전기')}>
            <Text style={signUpPage.interestLabel}>전기</Text>
          </TouchableOpacity>
        </View>
        <View style={signUpPage.seperation}>
          <TouchableOpacity style={[interests[2] == 1 ? signUpPage.interestBoxActive : signUpPage.interestBox]}
            onPress={() => toggleInterest('배달')}>
            <Text style={signUpPage.interestLabel}>배달</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[interests[3] == 1 ? signUpPage.interestBoxActive : signUpPage.interestBox]}
            onPress={() => toggleInterest('단순작업')}>
            <Text style={signUpPage.interestLabel}>단순작업</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity style={[isDone ? signUpPage.nextBtnActive : signUpPage.nextBtn]}
        onPress={() => isDone ? navigation.navigate('main') : null}>
          <Text style={signUpPage.nextBtnLabel}>가입완료</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export default interestScreen