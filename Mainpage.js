import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, Alert ,Image, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import logoErect from './src/images/iconStrockErectWhite.png';
import logoElect from './src/images/iconStrockElectBlue.png';
import logoDelivery from './src/images/iconStrockDeliveryBlue.png';
import logoSimple from './src/images/iconStrockSimpleBlue.png';
import logoClock from './src/images/iconStrockClock.png';
import logoStar from './src/images/iconStrockStar.png';

import { color } from 'react-native-reanimated';

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

const titleTitle = {
    width: 347,
    height: 90.6,
    fontFamily: "NotoSansCJKkr",
    fontSize: 32,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 44.8,
    letterSpacing: 0,
    color: colors.black
};

const searchField = {
    width: 343,
    height: 36,
    borderRadius: 10,
    backgroundColor: color.steel10
};

const layerPrefer = {
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
    height: 155
};

const title1 = {
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

const iconStrokeClock1 = {
    width: 15,
    height: 15
}

const layerClock1 = {
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

const iconStrokeStar1 = {
    width: 15,
    height: 15
}

const layerStar1 = {
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: 'center',
    },
    titleContainer: {
        width: 375,
        height: 117,
    },
    searchContainer: {
        width: 375,
        height: 57,
        marginTop: 116.5
    },
    preferLayoutContainer: { // BONGO 추천
        width: 375,
        height: 56,
        marginTop: 173
    },
    listCategoryContainer: { // 아이콘
        width: 375,
        height: 114,
        marginTop: 229
    },
    layoutCardTimeMoneyContainer1: {
        width: 375,
        height: 250,
        marginTop: 345
    },
    pageOrderContainer1: {
        width: 50,
        height: 50,
        marginTop: 575
    },
    autoLayoutContainer: { // 자동배치 BONGO
        width: 375,
        height: 56,
        marginTop: 668
    },
    layoutCardTimeMoneyContainer2: {
        width: 375,
        height: 282,
        marginTop: 724
    },
    pageOrderContainer2: {
        width: 50,
        height: 50,
        marginTop: 924
    },
    bgContainer: {
        width: 375,
        height: 84,
        backgroundColor: colors.flatBlueSkyLight,
        shadowColor: color.white,
        shadowOffset: {
          width: 0,
          height: 8
        },
        shadowRadius: 20,
        shadowOpacity: 1
    }
});


function MainScreen() {
  return (
    <View style={styles.container}>
      
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (    
    <NavigationContainer>
      <Stack.Navigator>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}