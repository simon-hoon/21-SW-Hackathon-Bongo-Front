import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, Alert ,Image, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {basicFont} from '../App';


import logoErect from './images/iconStrockErectWhite.png';
import logoElect from './images/iconStrockElectBlue.png';
import logoDelivery from './images/iconStrockDeliveryBlue.png';
import logoSimple from './images/iconStrockSimpleBlue.png';
import logoClock from './images/iconStrockClock.png';
import logoStar from './images/iconStrockStar.png';

import { color } from 'react-native-reanimated';
import { ScrollView } from 'react-native-gesture-handler';

const colors = {
  blue: "#0036d5",
  flatBlueSkyLight: "#fdfeff",
  lightGray: "#d0d0d0",
  signatureBlue: "#0047cc",
  colorPrimary500: "#00d5a7",
  black: "#000000",
  white: "#ffffff",
  steel10: "#8e8e93"
};

const titleTitle= {
    // fontFamily: "NotoSansCJKkr",
    fontSize: 32,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 44.8,
    letterSpacing: 0,
    color: "#000000",
    paddingTop: 10
};

const searchField = {
    width: 343,
    height: 36,
    borderRadius: 10,
    backgroundColor: color.steel10
};

const layerPrefer = {
    width: 354,
    height: 28,
    //fontFamily: "NotoSansCJKkr",
    fontSize: 16,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 28,
    letterSpacing: 0,
    color: color.white
};

const buttonStateDefaultErect = {
    width: 56,
    height: 56,
    color: color.white
};

const buttonStateDefaultElect = {
    width: 56,
    height: 56,
    color: color.white
};

const buttonStateDefaultDelivery = {
    width: 56,
    height: 56,
    color: color.white
};

const buttonStateDefaultSimple = {
    width: 56,
    height: 56,
    color: color.white
};

const iconStrokeWhiteErect = {
    width: 46,
    height: 46
};

const iconStrokeBlueElect = {
    width: 46,
    height: 46
};

const iconStrokeBlueDelivery = {
    width: 46,
    height: 46
};

const iconStrokeBlueSimple = {
    width: 46,
    height: 46
};

const layerErect = {
    width: 28,
    height: 22.1,
    fontFamily: "NotoSansCJKkr",
    fontSize: 14.4,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    color: colors.blue
};

const layerElect = {
    width: 28,
    height: 22.1,
    fontFamily: "NotoSansCJKkr",
    fontSize: 14.4,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    color: colors.blue
};

const layerDelivery = {
    width: 28,
    height: 22.1,
    fontFamily: "NotoSansCJKkr",
    fontSize: 14.4,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    color: colors.blue
};

const layerSimple = {
    width: 28,
    height: 22.1,
    fontFamily: "NotoSansCJKkr",
    fontSize: 14.4,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    color: colors.blue
};

//

const imgRectangle1 = {
    width: 155,
    height: 155,
    color: colors.blue
};

const title1 = {
  width: 35,
  height: 23,
  //fontFamily: "NotoSansCJKkr",
  fontSize: 16.2,
  fontWeight: "500",
  fontStyle: "normal",
  lineHeight: 22.7,
  letterSpacing: 0,
  color: "#000000"
};

const iconStrokeClock1 = {
    width: 15,
    height: 15
}

const layerClock1 = {
    width: 31,
    height: 21,
    //fontFamily: "NotoSansCJKkr",
    fontSize: 12.6,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 20.2,
    letterSpacing: 0,
    color: colors.colorPrimary500
}

const iconStrokeStar1 = {
    width: 15,
    height: 15
}

const layerStar1 = {
    width: 66,
    height: 20.2,
    //fontFamily: "NotoSansCJKkr",
    fontSize: 12.6,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 20.2,
    letterSpacing: 0,
    color: color.blue
}

//
/*
const imgRectangle2 = {
    width: 155,
    height: 155
};

const title2 = {
  width: 35,
  height: 23,
  fontFamily: "NotoSansCJKkr",
  fontSize: 16.2,
  fontWeight: "500",
  fontStyle: "normal",
  lineHeight: 22.7,
  letterSpacing: 0,
  color: "#000000"
};

const iconStrokeClock2 = {
    width: 15,
    height: 15
}

const layerClock2 = {
    width: 31,
    height: 21,
    fontFamily: "NotoSansCJKkr",
    fontSize: 12.6,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 20.2,
    letterSpacing: 0,
    color: colors.colorPrimary500
}

const iconStrokeStar2 = {
    width: 15,
    height: 15
}

const layerStar2 = {
    width: 66,
    height: 20.2,
    fontFamily: "NotoSansCJKkr",
    fontSize: 12.6,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 20.2,
    letterSpacing: 0,
    color: color.blue
}

//

const imgRectangle3 = {
    width: 155,
    height: 155
};

const title3 = {
  width: 35,
  height: 23,
  fontFamily: "NotoSansCJKkr",
  fontSize: 16.2,
  fontWeight: "500",
  fontStyle: "normal",
  lineHeight: 22.7,
  letterSpacing: 0,
  color: "#000000"
};

const iconStrokeClock3 = {
    width: 15,
    height: 15
}

const layerClock3 = {
    width: 31,
    height: 21,
    fontFamily: "NotoSansCJKkr",
    fontSize: 12.6,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 20.2,
    letterSpacing: 0,
    color: colors.colorPrimary500
}

const iconStrokeStar3 = {
    width: 15,
    height: 15
}

const layerStar3 = {
    width: 66,
    height: 20.2,
    fontFamily: "NotoSansCJKkr",
    fontSize: 12.6,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 20.2,
    letterSpacing: 0,
    color: color.blue
}
*/
//

const oval1 = {
    width: 7,
    height: 7,
    backgroundColor: colors.blue
};

const oval2 = {
    width: 7,
    height: 7,
    backgroundColor: colors.white
};

const oval3 = {
    width: 7,
    height: 7,
    backgroundColor: colors.white
};

//

const layerAuto = {
    width: 90,
    height: 28,
    fontFamily: "NotoSansCJKkr",
    fontSize: 16,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 28,
    letterSpacing: 0,
    color: color.white
};

//
/*
const imgRectangle4 = {
    width: 155,
    height: 155
};

const title4 = {
  width: 35,
  height: 23,
  fontFamily: "NotoSansCJKkr",
  fontSize: 16.2,
  fontWeight: "500",
  fontStyle: "normal",
  lineHeight: 22.7,
  letterSpacing: 0,
  color: "#000000"
};

const iconStrokeClock4 = {
    width: 15,
    height: 15
}

const layerClock4 = {
    width: 31,
    height: 21,
    fontFamily: "NotoSansCJKkr",
    fontSize: 12.6,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 20.2,
    letterSpacing: 0,
    color: colors.colorPrimary500
}

const iconStrokeStar4 = {
    width: 15,
    height: 15
}

const layerStar4 = {
    width: 66,
    height: 20.2,
    fontFamily: "NotoSansCJKkr",
    fontSize: 12.6,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 20.2,
    letterSpacing: 0,
    color: color.blue
}

//

const imgRectangle5 = {
    width: 155,
    height: 155
};

const title5 = {
  width: 35,
  height: 23,
  fontFamily: "NotoSansCJKkr",
  fontSize: 16.2,
  fontWeight: "500",
  fontStyle: "normal",
  lineHeight: 22.7,
  letterSpacing: 0,
  color: "#000000"
};

const iconStrokeClock5 = {
    width: 15,
    height: 15
}

const layerClock5 = {
    width: 31,
    height: 21,
    fontFamily: "NotoSansCJKkr",
    fontSize: 12.6,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 20.2,
    letterSpacing: 0,
    color: colors.colorPrimary500
}

const iconStrokeStar5 = {
    width: 15,
    height: 15
}

const layerStar5 = {
    width: 66,
    height: 20.2,
    fontFamily: "NotoSansCJKkr",
    fontSize: 12.6,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 20.2,
    letterSpacing: 0,
    color: color.blue
}

//

const imgRectangle6 = {
    width: 155,
    height: 155
};

const title6 = {
  width: 35,
  height: 23,
  fontFamily: "NotoSansCJKkr",
  fontSize: 16.2,
  fontWeight: "500",
  fontStyle: "normal",
  lineHeight: 22.7,
  letterSpacing: 0,
  color: "#000000"
};

const iconStrokeClock6 = {
    width: 15,
    height: 15
}

const layerClock6 = {
    width: 31,
    height: 21,
    fontFamily: "NotoSansCJKkr",
    fontSize: 12.6,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 20.2,
    letterSpacing: 0,
    color: colors.colorPrimary500
}

const iconStrokeStar6 = {
    width: 15,
    height: 15
}

const layerStar6 = {
    width: 66,
    height: 20.2,
    fontFamily: "NotoSansCJKkr",
    fontSize: 12.6,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 20.2,
    letterSpacing: 0,
    color: color.blue
}
*/
//

const oval4 = {
    width: 7,
    height: 7,
    backgroundColor: colors.blue
};

const oval5 = {
    width: 7,
    height: 7,
    backgroundColor: colors.white
};

const oval6 = {
    width: 7,
    height: 7,
    backgroundColor: colors.white
};

//

const iconStrokeMoney = {
    width: 35,
    height: 35
};

const iconStrokeHomeBlue = {
    width: 35,
    height: 35
};

const iconStrokeProfile = {
    width: 35,
    height: 35
};

//

const layoutMoney = {
    width: 23,
    height: 20,
    fontFamily: "NotoSansCJKkr",
    fontSize: 12,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 19.2,
    letterSpacing: 0,
    textAlign: "center",
    color: colors.black
}

const layoutHome = {
    width: 23,
    height: 20,
    fontFamily: "NotoSansCJKkr",
    fontSize: 12,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 19.2,
    letterSpacing: 0,
    textAlign: "center",
    color: colors.blue
}

const layoutProfile = {
    width: 23,
    height: 20,
    fontFamily: "NotoSansCJKkr",
    fontSize: 12,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 19.2,
    letterSpacing: 0,
    textAlign: "center",
    color: colors.black
}

//

const signUpPage = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: 17.4
    },
    seperation: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    style: {
        resizeMode: "contain",
        height: 150,
        width: 150
    },
    title: titleTitle,
    prefer: layerPrefer,
    image: imgRectangle1,
    work: title1,
    clock: iconStrokeClock1,
    time: layerClock1,
    star: iconStrokeStar1,
    money: layerStar1
});


function MainScreen({navigation}) {
  return (
    <View style={signUpPage.container}>
        <View style ={signUpPage.header}>
            <Text style ={signUpPage.title}>오늘의 BONGO를{"\n"}찾아보세요!</Text>
        </View>
            <Text style ={signUpPage.prefer}>BONGO 추천 </Text>
        
        <ScrollView
        horizontal = {true}
        pagingEnabled={true}
        >
            <Image style={signUpPage.style}
            source={require("../assets/icon.png")}
            />
            <Image style={signUpPage.style}
            source={require("../assets/icon.png")}
            />
            <Image style={signUpPage.style}
            source={require("../assets/icon.png")}
            />
            <Image style={signUpPage.style}
            source={require("../assets/icon.png")}
            />
            <Image style={signUpPage.style}
            source={require("../assets/icon.png")}
            />
        </ScrollView>
        
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button   
            title="뒤로(디버깅용)"
            onPress={() => navigation.push('home')}/>
        </View>
    </View>
  );
}

export default MainScreen;