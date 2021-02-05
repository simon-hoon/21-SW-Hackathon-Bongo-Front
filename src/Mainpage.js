import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, Alert ,Image, TouchableOpacity} from 'react-native';
import {basicFont} from '../App';
import { color } from 'react-native-reanimated';
import { ScrollView } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import { SearchBar } from 'react-native-elements';

import logoErect from './images/iconStrockErectWhite.png';
import logoElect from './images/iconStrockElectBlue.png';
import logoDelivery from './images/iconStrockDeliveryBlue.png';
import logoSimple from './images/iconStrockSimpleBlue.png';
import logoClock from './images/iconStrockClock.png';
import logoStar from './images/iconStrockStar.png';
import logoCheck from './images/iconStrockCheck.png';
import logoClose from './images/iconStrockClose.png';


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


const layerPrefer = {
    width: 354,
    height: 28,
    fontFamily: basicFont,
    fontSize: 16,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 28,
    letterSpacing: 0,
    color: color.white,
    marginLeft: 21,
    marginTop: 5
};



const iconStroke = {
    width: 46,
    height: 46
};

const layerErect = {
    width: 28,
    height: 22.1,
    fontFamily: basicFont,
    fontSize: 14.4,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    color: colors.blue
};

const layerElect = {
    width: 28,
    height: 22.1,
    fontFamily: basicFont,
    fontSize: 14.4,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    color: colors.blue
};

const layerDelivery = {
    width: 28,
    height: 22.1,
    fontFamily: basicFont,
    fontSize: 14.4,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    color: colors.blue
};

const layerSimple = {
    width: 28,
    height: 22.1,
    fontFamily: basicFont,
    fontSize: 14.4,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    color: colors.blue
};

const layoutCardTimeMoney = {
    
    height: 250
};
//

const layoutCardBase = {
    width: 155,
    height: 216,
    margin: 15,
    marginLeft: 16
};

const imgRectangle1 = {
    width: 155,
    height: 155,
    color: colors.blue
};

const title1 = {
  width: 35,
  height: 23,
  fontFamily: basicFont,
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
    marginTop: 1,
    fontFamily: basicFont,
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
    marginTop: 1,
    fontFamily: basicFont,
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
    fontFamily: basicFont,
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
    fontFamily: basicFont,
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
    fontFamily: basicFont,
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
    fontFamily: basicFont,
    fontSize: 12,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 19.2,
    letterSpacing: 0,
    textAlign: "center",
    color: colors.black
}



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

//

const signUpPage = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: 17.4,
        marginTop: 25
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
        alignItems: "center",
        marginTop: -38,
        elevation: 3
    },
    whiteCircle: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        backgroundColor: colors.white,
        justifyContent: "center",
        alignItems: "center",
        marginTop: -38,
        elevation: 3
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
    money: layerStar1,
    menu: menuBox,
    menuText: menuBoxText,
    menuTextChoiced : menuBoxTextChoiced,
});


function MainScreen({navigation}) {
  return (
    <View style={signUpPage.container}>
        <ScrollView>
            <View style ={signUpPage.header}>
                <Text style ={signUpPage.title}>오늘의 BONGO를{"\n"}찾아보세요!</Text>
            </View>
                <SearchBar
                    platform={'ios'}
                    placeholder={' 검색하세요.'}
                />
            
            
            <Text style ={signUpPage.prefer}>BONGO 추천 </Text>
            
            <ScrollView style={signUpPage.cardList}
            horizontal={true}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            >
                <View style={signUpPage.mold}>
                    <Image style={signUpPage.style}
                    source={require("../src/images/1.jpg")}
                    />
                    <Text>열선 관련 급 봉고!</Text>
                    <View style ={signUpPage.seperation}>
                        <Image style={signUpPage.logoContainer} source={logoClock} />
                        <Text style={signUpPage.time}>2시간</Text>
                        <Image style={signUpPage.logoContainer} source={logoStar} />
                        <Text style={signUpPage.money}>35,000</Text>                    
                    </View>                
                </View>
                
                <View style={signUpPage.mold}>
                    <Image style={signUpPage.style}
                    source={require("../src/images/2.jpg")}
                    />
                    <Text>건설 기사분 찾습니다!</Text>
                    <View style ={signUpPage.seperation}>
                        <Image style={signUpPage.logoContainer} source={logoClock} />
                        <Text style={signUpPage.time}>4시간</Text>
                        <Image style={signUpPage.logoContainer} source={logoStar} />
                        <Text style={signUpPage.money}>60,000</Text>          
                    </View>                
                </View>

                <View style={signUpPage.mold}>
                    <Image style={signUpPage.style}
                    source={require("../src/images/3.jpg")}
                    />
                    <Text>아파트 건설 현장 지원 공고</Text>
                    <View style ={signUpPage.seperation}>
                        <Image style={signUpPage.logoContainer} source={logoClock} />
                        <Text style={signUpPage.time}>5시간</Text>
                        <Image style={signUpPage.logoContainer} source={logoStar} />
                        <Text style={signUpPage.money}>80,000</Text>                    
                    </View>                
                </View>

                <View style={signUpPage.mold}>
                    <Image style={signUpPage.style}
                    source={require("../src/images/1.jpg")}
                    />
                    <Text>오랫 동안 열심히 일 할..</Text>
                    <View style ={signUpPage.seperation}>
                        <Image style={signUpPage.logoContainer} source={logoClock} />
                        <Text style={signUpPage.time}>9시간</Text>
                        <Image style={signUpPage.logoContainer} source={logoStar} />
                        <Text style={signUpPage.money}>110,000</Text>                    
                    </View>                
                </View>

                <View style={signUpPage.mold}>
                    <Image style={signUpPage.style}
                    source={require("../src/images/2.jpg")}
                    />
                    <Text>건설 현장 근무(6개월..</Text>
                    <View style ={signUpPage.seperation}>
                        <Image style={signUpPage.logoContainer} source={logoClock} />
                        <Text style={signUpPage.time}>4시간</Text>
                        <Image style={signUpPage.logoContainer} source={logoStar} />
                        <Text style={signUpPage.money}>57,000</Text>                    
                    </View>                
                </View>

                <View style={signUpPage.mold}>
                    <Image style={signUpPage.style}
                    source={require("../src/images/3.jpg")}
                    />
                    <Text>건설회사 장기 (1년 이상..</Text>
                    <View style ={signUpPage.seperation}>
                        <Image style={signUpPage.logoContainer} source={logoClock} />
                        <Text style={signUpPage.time}>8시간</Text>
                        <Image style={signUpPage.logoContainer} source={logoStar} />
                        <Text style={signUpPage.money}>협의 후 지급</Text>                    
                    </View>                
                </View>
            </ScrollView>

                <Text style ={signUpPage.prefer}>자동배치 BONGO </Text>
            <ScrollView style={[signUpPage.cardList, {paddingBottom:40}]}
            horizontal = {true}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            
            >
                <View style={signUpPage.mold}>
                    <Image style={signUpPage.style}
                    source={require("../src/images/1.jpg")}
                    />
                    <View style={signUpPage.centre}>
                        <View style={signUpPage.blueCircle}>
                            <Image style={signUpPage.logoContainer} source={logoCheck}/>
                        </View>
                        <Text>건축 기술자분..</Text>
                        <View style ={signUpPage.seperation}>
                            <Image style={signUpPage.logoContainer} source={logoClock} />
                            <Text style={signUpPage.time}>9시간</Text>
                            <Image style={signUpPage.logoContainer} source={logoStar} />
                            <Text style={signUpPage.money}>111,310</Text>                    
                        </View>                
                    </View>             
                </View>

                <View style={signUpPage.mold}>
                    <Image style={signUpPage.style}
                    source={require("../src/images/2.jpg")}
                    />
                    <View style={signUpPage.centre}>
                        <View style={signUpPage.whiteCircle}>
                            <Image style={signUpPage.logoContainer} source={logoClose}/>
                        </View>
                        <Text>오늘 10시간 강남구..</Text>
                        <View style ={signUpPage.seperation}>
                            <Image style={signUpPage.logoContainer} source={logoClock} />
                            <Text style={signUpPage.time}>5시간</Text>
                            <Image style={signUpPage.logoContainer} source={logoStar} />
                            <Text style={signUpPage.money}>64,830</Text>                    
                        </View>                
                    </View>            
                </View>

                <View style={signUpPage.mold}>
                    <Image style={signUpPage.style}
                    source={require("../src/images/3.jpg")}
                    />
                    <View style={signUpPage.centre}>
                        <View style={signUpPage.whiteCircle}>
                            <Image style={signUpPage.logoContainer} source={logoClose}/>
                        </View>
                        <Text>단기 계약직 공고(건설)</Text>
                        <View style ={signUpPage.seperation}>
                            <Image style={signUpPage.logoContainer} source={logoClock} />
                            <Text style={signUpPage.time}>7시간</Text>
                            <Image style={signUpPage.logoContainer} source={logoStar} />
                            <Text style={signUpPage.money}>85,710</Text>                    
                        </View>                
                    </View>            
                </View>

                <View style={signUpPage.mold}>
                    <Image style={signUpPage.style}
                    source={require("../src/images/1.jpg")}
                    />
                    <View style={signUpPage.centre}>
                        <View style={signUpPage.blueCircle}>
                            <Image style={signUpPage.logoContainer} source={logoCheck}/>
                        </View>
                        <Text>영등포구 건설 현장</Text>
                        <View style ={signUpPage.seperation}>
                            <Image style={signUpPage.logoContainer} source={logoClock} />
                            <Text style={signUpPage.time}>12시간</Text>
                            <Image style={signUpPage.logoContainer} source={logoStar} />
                            <Text style={signUpPage.money}>155,270</Text>                    
                        </View>                
                    </View>         
                </View>

                <View style={signUpPage.mold}>
                    <Image style={signUpPage.style}
                    source={require("../src/images/2.jpg")}
                    />
                    <View style={signUpPage.centre}>
                        <View style={signUpPage.whiteCircle}>
                            <Image style={signUpPage.logoContainer} source={logoClose}/>
                        </View>
                        <Text>일주일 간 도와주실 분!!</Text>
                        <View style ={signUpPage.seperation}>
                            <Image style={signUpPage.logoContainer} source={logoClock} />
                            <Text style={signUpPage.time}>3시간</Text>
                            <Image style={signUpPage.logoContainer} source={logoStar} />
                            <Text style={signUpPage.money}>44,190</Text>                    
                        </View>                
                    </View>
                </View>

                <View style={signUpPage.mold}>
                    <Image style={signUpPage.style}
                    source={require("../src/images/3.jpg")}
                    />
                    <View style={signUpPage.centre}>
                        <View style={signUpPage.whiteCircle}>
                            <Image style={signUpPage.logoContainer} source={logoClose}/>
                        </View>
                    </View>
                    <Text>용접 기사분 구합니다.</Text>
                    <View style ={signUpPage.seperation}>
                        <Image style={signUpPage.logoContainer} source={logoClock} />
                        <Text style={signUpPage.time}>8시간</Text>
                        <Image style={signUpPage.logoContainer} source={logoStar} />
                        <Text style={signUpPage.money}>90,000</Text>                    
                    </View>                
                </View>
            </ScrollView>   
        </ScrollView>
        <View style ={signUpPage.menu}>
            <View style ={{marginTop:20}}>
                <TouchableOpacity 
                    onPress={() => navigation.navigate('calculate')}>
                    <Feather
                        style ={{textAlign:'center'}}
                        name ="dollar-sign"
                        color ="black"
                        size={25}/>
                    <Text style={signUpPage.menuText}>정산</Text>
                </TouchableOpacity>
            </View>
            <View style ={{marginTop:20}}>
                <TouchableOpacity 
                    onPress={() => {}}>
                    <Feather
                        style ={{textAlign:'center'}}
                        name ="home"
                        color ="blue"
                        size={25}/>
                    <Text style={signUpPage.menuTextChoiced}>메인</Text>
                </TouchableOpacity>
            </View>
            <View style ={{marginTop:20}}>
                <TouchableOpacity 
                    onPress={() => navigation.navigate('private')}>
                <Feather
                    style ={{textAlign:'center'}}
                    name ="user"
                    color ="black"
                    size={25}/>
                <Text style={signUpPage.menuText}>내 프로필</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>

  );
}

export default MainScreen;