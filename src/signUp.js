import React from "react";
import { StyleSheet, Text, View } from "react-native";


////////////////// contents layout ///////////////

const pageBackTitle= {
    width: 375,
        height: 60
}

;

const layoutBarForTitle= {
    width: 375,
        height: 117
}

;

const titleTitle= {
    width: 347,
        height: 90.6,
        fontFamily: "NotoSansCJKkr",
        fontSize: 32,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 44.8,
        letterSpacing: 0,
        color: "#000000"
}

;

const choiceClickedOn= {
    width: 158,
        height: 44,
        borderRadius: 11,
        borderStyle: "solid",
        borderWidth: 1.7,
        borderColor: colors.blue
}

;

const choiceClickedOff= {
    width: 158,
        height: 44,
        borderRadius: 11,
        borderStyle: "solid",
        borderWidth: 1.7,
        borderColor: colors.blue
}

;

const input1= {
    width: 375,
        height: 106
}

;

////////////////////////////////////

/////////////// text layout //////////
const layerMail= {
    width: 123,
        height: 22.1,
        fontFamily: "NotoSansCJKkr",
        fontSize: 14.4,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#000000"
};

const layerPwd= {
    width: 299,
        height: 19,
        fontFamily: "NotoSansCJKkr",
        fontSize: 14.4,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#000000"
};

const layerPwdCheck= {
    width: 299,
        height: 19,
        fontFamily: "NotoSansCJKkr",
        fontSize: 14.4,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#000000"
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
    padding: 24,
    backgroundColor: "#eaeaea"
  },
  title: titleTitle,
  ClickedOn: choiceClickedOn,
  ClickedOff: choiceClickedOff,
  input: input1,
  Mail: layerMail,
  pwd: layerPwd,
  pwdCheck : layerPwdCheck,
  Birth : layerBirth,
  Sex: layerSex,
  Addr: layerAddr,
  AddrDetail: layerAddrDetail,
});
