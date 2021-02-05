import React, {useState} from "react";
import { StyleSheet, Text, View, ScrollView, Button, Alert, TouchableOpacity, TouchableHighlight, TextInput, Image, Modal } from "react-native";
import 'react-native-gesture-handler';
import {basicFont} from '../App';
import Feather from 'react-native-vector-icons/Feather'
import DropDownPicker from 'react-native-dropdown-picker';

import ConstructImg from './images/const.png';
import ConstructImgActive from './images/constBlue.png';
import ElectricImg from './images/elec.png';
import DeliveryImg from './images/delivery.png';
import SimpleImg from './images/keyword.png';
import StarImg from './images/iconStrokeStarBlue.png';

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
    borderColor: '#cecece',
    alignItems: 'center'
  },
  interestBoxActive: {
    width: 144,
    height: 130,
    opacity: 0.7,
    borderRadius: 10.7,
    borderStyle: "solid",
    borderWidth: 2.1,
    borderColor: colors.blue,
    alignItems: 'center'
  },
  interestLabel: {
    color: "#9b9b9b",
    textAlign: 'center'
  },
  interestLabelActive: {
    color: colors.blue,
    textAlign: 'center'
  },
  interestImg: {
    width: 90,
    height: 90,
    alignItems: 'center',
    marginTop: 10
  },
  centeredView: {
    alignItems: 'center'
  }
});

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(52, 52, 52, 0.14)'
  },
  modalView: {
    width: 328,
    height: 200,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 1,
    shadowRadius: 7,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    fontFamily: basicFont,
    fontSize: 17.7,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0.44,
    textAlign: "center",
    color: colors.white,
    paddingTop: 15
  },
  modalText: {
    marginBottom: 30,
    fontFamily: basicFont,
    fontSize: 16,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0.44,
    textAlign: "center",
    color: '#000000',
    marginTop: -50
  },
  bringBtn: {
    width: 265,
    height: 55,
    borderRadius: 27.6,
    backgroundColor: colors.signatureBlue
  },
  modalLogo: {
    top: -70,
    width:70,
    height: 70,
    borderRadius:40,
    backgroundColor:colors.white,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 1,
    shadowRadius: 7,
    alignItems:'center'
  }
});

function interestScreen({navigation}){
  const [interests, setInterests] = useState([0,0,0,0]);
  const [modalVisible, setModalVisible] = useState(false);

  var interestNames = ["건축", "전기", "배달", "단순작업"];
  var isDone = false;

  function toggleInterest(name) {
    var index = interestNames.indexOf(name);

    if (index == -1) {
      return false;
    } else if (index == 0) {
      // Modal 띄우기
      setModalVisible(true);
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
      <InterestModal modalVisible = { modalVisible } setModalVisible={setModalVisible}/>
      <View style ={signUpPage.header}>
          <Text style ={signUpPage.title}>인증 분야를{"\n"}선택하세요.</Text>
      </View>
      <View>
        <View style={signUpPage.seperation}>
          <TouchableOpacity style={[interests[0] == 1 ? signUpPage.interestBoxActive : signUpPage.interestBox]}
            onPress={() => toggleInterest('건축')}>
            <Image style={signUpPage.interestImg} source={interests[0] == 1 ? ConstructImgActive : ConstructImg}/>
            <Text style={[interests[0] == 1 ? signUpPage.interestLabelActive : signUpPage.interestLabel]}>건축</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[interests[1] == 1 ? signUpPage.interestBoxActive : signUpPage.interestBox]}
            onPress={() => toggleInterest('전기')}>
            <Image style={signUpPage.interestImg} source={ElectricImg}/>
            <Text style={signUpPage.interestLabel}>전기</Text>
          </TouchableOpacity>
        </View>
        <View style={signUpPage.seperation}>
          <TouchableOpacity style={[interests[2] == 1 ? signUpPage.interestBoxActive : signUpPage.interestBox]}
            onPress={() => toggleInterest('배달')}>
            <Image style={signUpPage.interestImg} source={DeliveryImg}/>
            <Text style={signUpPage.interestLabel}>배달</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[interests[3] == 1 ? signUpPage.interestBoxActive : signUpPage.interestBox]}
            onPress={() => toggleInterest('단순작업')}>
            <Image style={signUpPage.interestImg} source={SimpleImg}/>
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

function InterestModal(props) {
  return (
    <Modal
          animationType="slide"
          transparent={true}
          visible={props.modalVisible}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.modalLogo} >
                <Image style={{width:50, height:50, marginTop:10}} source={StarImg}/>
              </View>
              <Text style={styles.modalText}>건축 인증 자격증을 올려주세요</Text>

              <TouchableHighlight
                style={styles.bringBtn}
                onPress={() => {
                  props.setModalVisible(!props.modalVisible);
                }}
              >
                <Text style={styles.textStyle}>가져오기</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
  );
}

export default interestScreen