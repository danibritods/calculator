import { useState } from "react";
import { View, StyleSheet, Button, Text } from "react-native";
import CalcButton from "./CalcButton";

export default () => {    
    const style = StyleSheet.create({
        button: {
            fontSize: "60",
            alignItems: "center",
            justifyContent: "center",
            paddingVertical: 30,
            paddingHorizontal: 30,
            borderRadius: 1,
            backgroundColor: "grey",
            overflow: "hidden",
            margin: 0.5,
        },
        display: {
            fontSize: 50,
            lineHeight: 21,
            // fontWeight: 0,
            letterSpacing: 0.01,
            color: "white",
            textAlign: "right",
            textAlignVertical: "down",

            alignItems: "flex-end",
            // justifyContent: "right",
            paddingVertical: 50,
            paddingHorizontal: 30,
            borderRadius: 1,
            backgroundColor: "#0c0704",
            overflow: "hidden",
            margin: 0,
            borderBottomEndRadius: 0,
            marginBottom: 0,
            marginEnd: 0,
            marginBottom: 0

        },
        keyboard: {
            flexWrap: "nowrap",
            flexDirection: "row",
            // minWidth: 250,
            // maxWidth: 250,
        },
        calculator: {
            backgroundColor: "black",

        },
        numbers: {
            flexWrap: "wrap-reverse",
            flexDirection: "row",
            // minWidth: 370,
            maxWidth: 409,
            alignContent: "stretch",      
        },
        opeators: {

        },
        grey: {
            alignContent: "stretch"
        },

        lastRow:{
            flexDirection: "row",
        },
        textStyle: {
            fontSize: 50,
            fontFamily: "Sans",
            fontWeight: "100",
        },
    });
    const [display, setDisplay] = useState(" ")
    // const labels = ["1","2","3","4","5","6","7","8","9","+ ","- ","* ","/ ","C","="]

    const numbers = ["1","2","3","4","5","6","7","8","9"]
    const operators = [" / "," * "," - "," + ", "="]
    const others = ["AC","0 ","."]
    const k = 51.7 


    return (
        <View style={style.calculator}>
        <Text
            style={style.display}>
                {display}
        </Text>
        <View style={style.keyboard}>
            <View style={style.grey}>
                    
                <CalcButton 
                    label={"AC"} 
                    buttonStyle={[style.button,{backgroundColor: "#c0bec1"}]} 
                    textStyle={style.textStyle} 
                    setDisplay={setDisplay}
                    display={display}
                    key={13212}
                />
                
                <View style={style.numbers} >
                {/* <View style={style.lastRow}> */}
                    <CalcButton 
                        label={"0"} 
                        buttonStyle={[style.button,{backgroundColor: "#cfcdd0"},{paddingHorizontal: k*116/50, paddingVertical: 20}]} 
                        textStyle={[style.textStyle,{textAlign:"left", textAlignVertical:"botton",alignContent: "left"}]} 
                        setDisplay={setDisplay}
                        display={display}
                        key={23}
                    />
                    <CalcButton 
                        label={"."} 
                        buttonStyle={[style.button,{backgroundColor: "#cfcdd0", paddingHorizontal: k*(57.5/50)}]} 
                        textStyle={style.textStyle} 
                        setDisplay={setDisplay}
                        display={display}
                        key={32}
                    />
                    {/* </View> */}
                    {numbers.map((l,i)=>(
                        <CalcButton 
                        label={l} 
                        buttonStyle={[style.button,{backgroundColor: "#cfcdd0",paddingHorizontal:k}]}
                        textStyle={style.textStyle} 
                        setDisplay={setDisplay}
                        display={display}
                        key={i}/>
                        )
                        )}
                </View>
                
            </View>



            <View style={style.operators} >
                {operators.map((l,i)=>(
                    <CalcButton 
                    label={l} 
                    buttonStyle={[style.button,{backgroundColor: "#ff8321"}]} 
                    textStyle={[style.textStyle,{color:"white"}]} 
                    setDisplay={setDisplay}
                    display={display}
                    key={i}/>
                    )
                    )}
            </View>
        </View>
        </View>
    )
}