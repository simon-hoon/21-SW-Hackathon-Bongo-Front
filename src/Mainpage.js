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
import logoCheck from './images/iconStrockCheck.png';
import logoClose from './images/iconStrockClose.png';

import { color } from 'react-native-reanimated';
import { ScrollView } from 'react-native-gesture-handler';

const colors = {
  blue: "#0046d5",
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



const iconStroke = {
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

const layoutCardTimeMoney = {
    width: 375,
    height: 150
};
//

const layoutCardBase = {
    width: 155,
    height: 216,
    margin: 17
};

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
    height: 20,
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
    width: 70,
    height: 20,
    //fontFamily: "NotoSansCJKkr",
    fontSize: 12.6,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 20.2,
    letterSpacing: 0,
    color: colors.blue
}

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
        padding: 22,
        backgroundColor: colors.white,
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: 17.4,
        marginTop: 35
    },
    seperation: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    style: {
        resizeMode: "cover",
        height: 150,
        width: 150,
        marginVertical: 10,
        borderRadius: 7.2
    },
    logoContainer:{
        width: 20,
        height: 20,
        //marginTop: 5
    },
    blueCircle: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        backgroundColor: colors.blue,
        justifyContent: "center",
        alignItems: "center"
    },
    whiteCircle: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        backgroundColor: colors.white,
        justifyContent: "center",
        alignItems: "center"
    },
    centre: {
        justifyContent: "center",
        alignItems: "center"
    },
    cardList: layoutCardTimeMoney,
    title: titleTitle,
    prefer: layerPrefer,
    mold: layoutCardBase,
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
        
        <ScrollView style={signUpPage.cardList}
        horizontal={true}
        pagingEnabled={true}
        >
            <View style={signUpPage.mold}>
                <Image style={signUpPage.style}
                source={require("../src/images/photo.jpg")}
                />
                <Text>Title</Text>
                <View style ={signUpPage.seperation}>
                    <Image style={signUpPage.logoContainer} source={logoClock} />
                    <Text style={signUpPage.time}>2시간</Text>
                    <Image style={signUpPage.logoContainer} source={logoStar} />
                    <Text style={signUpPage.money}>35,000</Text>                    
                </View>                
            </View>
            
            <View style={signUpPage.mold}>
                <Image style={signUpPage.style}
                source={require("../src/images/photo.jpg")}
                />
                <Text>Title</Text>
                <View style ={signUpPage.seperation}>
                    <Image style={signUpPage.logoContainer} source={logoClock} />
                    <Text style={signUpPage.time}>4시간</Text>
                    <Image style={signUpPage.logoContainer} source={logoStar} />
                    <Text style={signUpPage.money}>57,560</Text>          
                </View>                
            </View>

            <View style={signUpPage.mold}>
                <Image style={signUpPage.style}
                source={require("../src/images/photo.jpg")}
                />
                <Text>Title</Text>
                <View style ={signUpPage.seperation}>
                    <Image style={signUpPage.logoContainer} source={logoClock} />
                    <Text style={signUpPage.time}>5시간</Text>
                    <Image style={signUpPage.logoContainer} source={logoStar} />
                    <Text style={signUpPage.money}>86,170</Text>                    
                </View>                
            </View>

            <View style={signUpPage.mold}>
                <Image style={signUpPage.style}
                source={require("../src/images/photo.jpg")}
                />
                <Text>Title</Text>
                <View style ={signUpPage.seperation}>
                    <Image style={signUpPage.logoContainer} source={logoClock} />
                    <Text style={signUpPage.time}>9시간</Text>
                    <Image style={signUpPage.logoContainer} source={logoStar} />
                    <Text style={signUpPage.money}>111,310</Text>                    
                </View>                
            </View>

            <View style={signUpPage.mold}>
                <Image style={signUpPage.style}
                source={require("../src/images/photo.jpg")}
                />
                <Text>Title</Text>
                <View style ={signUpPage.seperation}>
                    <Image style={signUpPage.logoContainer} source={logoClock} />
                    <Text style={signUpPage.time}>4시간</Text>
                    <Image style={signUpPage.logoContainer} source={logoStar} />
                    <Text style={signUpPage.money}>57,560</Text>                    
                </View>                
            </View>
        </ScrollView>

            <Text style ={signUpPage.prefer}>자동배치 BONGO </Text>
        <ScrollView
        horizontal = {true}
        pagingEnabled={true}
        >
            <View style={signUpPage.mold}>
                <Image style={signUpPage.style}
                source={require("../src/images/photo.jpg")}
                />
                <View style={signUpPage.centre}>
                    <View style={signUpPage.blueCircle}>
                        <Image style={signUpPage.logoContainer} source={logoCheck}/>
                    </View>
                </View>
                <Text>Title</Text>
                <View style ={signUpPage.seperation}>
                    <Image style={signUpPage.logoContainer} source={logoClock} />
                    <Text style={signUpPage.time}>9시간</Text>
                    <Image style={signUpPage.logoContainer} source={logoStar} />
                    <Text style={signUpPage.money}>111,310</Text>                    
                </View>                
            </View>

            <View style={signUpPage.mold}>
                <Image style={signUpPage.style}
                source={require("../src/images/photo.jpg")}
                />
                <View style={signUpPage.centre}>
                    <View style={signUpPage.whiteCircle}>
                        <Image style={signUpPage.logoContainer} source={logoClose}/>
                    </View>
                </View>
                <Text>Title</Text>
                <View style ={signUpPage.seperation}>
                    <Image style={signUpPage.logoContainer} source={logoClock} />
                    <Text style={signUpPage.time}>9시간</Text>
                    <Image style={signUpPage.logoContainer} source={logoStar} />
                    <Text style={signUpPage.money}>111,310</Text>                    
                </View>                
            </View>

            <View style={signUpPage.mold}>
                <Image style={signUpPage.style}
                source={require("../src/images/photo.jpg")}
                />
                <View style={signUpPage.centre}>
                    <View style={signUpPage.blueCircle}>
                        <Image style={signUpPage.logoContainer} source={logoCheck}/>
                    </View>
                </View>
                <Text>Title</Text>
                <View style ={signUpPage.seperation}>
                    <Image style={signUpPage.logoContainer} source={logoClock} />
                    <Text style={signUpPage.time}>9시간</Text>
                    <Image style={signUpPage.logoContainer} source={logoStar} />
                    <Text style={signUpPage.money}>111,310</Text>                    
                </View>                
            </View>

            <View style={signUpPage.mold}>
                <Image style={signUpPage.style}
                source={require("../src/images/photo.jpg")}
                />
                <View style={signUpPage.centre}>
                    <View style={signUpPage.blueCircle}>
                        <Image style={signUpPage.logoContainer} source={logoCheck}/>
                    </View>
                </View>
                <Text>Title</Text>
                <View style ={signUpPage.seperation}>
                    <Image style={signUpPage.logoContainer} source={logoClock} />
                    <Text style={signUpPage.time}>9시간</Text>
                    <Image style={signUpPage.logoContainer} source={logoStar} />
                    <Text style={signUpPage.money}>111,310</Text>                    
                </View>                
            </View>

            <View style={signUpPage.mold}>
                <Image style={signUpPage.style}
                source={require("../src/images/photo.jpg")}
                />
                <View style={signUpPage.centre}>
                    <View style={signUpPage.blueCircle}>
                        <Image style={signUpPage.logoContainer} source={logoCheck}/>
                    </View>
                </View>
                <Text>Title</Text>
                <View style ={signUpPage.seperation}>
                    <Image style={signUpPage.logoContainer} source={logoClock} />
                    <Text style={signUpPage.time}>9시간</Text>
                    <Image style={signUpPage.logoContainer} source={logoStar} />
                    <Text style={signUpPage.money}>111,310</Text>                    
                </View>                
            </View>
        </ScrollView>    
    </View>

  );
}

export default MainScreen;