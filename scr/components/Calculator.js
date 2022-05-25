import { useState } from "react";
import { View, StyleSheet, Button, Text } from "react-native";
import CalcButton from "./CalcButton";

export default () => {    
    const style = StyleSheet.create({
        button: {
            alignItems: "center",
            justifyContent: "center",
            paddingVertical: 30,
            paddingHorizontal: 30,
            borderRadius: 4,
            backgroundColor: "grey",
            overflow: "hidden",
            margin: 2,
        },
        text: {
            fontSize: 30,
            lineHeight: 21,
            fontWeight: "bold",
            letterSpacing: 0.01,
            color: "black"
        },
        flex: {
            flexWrap: "wrap",
            flexDirection: "row"
            

        }
    });
    const [display, setDisplay] = useState("")
    const labels = ["1","2","3","4","5","6","7","8","9","C","=","+","-"]

    return (
        <>
        <Text
            style={style.text}>
                {display}
        </Text>
        <View style={style.flex} >
            {labels.map((l,i)=>(
                <CalcButton 
                label={l} 
                buttonStyle={style.button} 
                setDisplay={setDisplay}
                display={display}
                key={i}/>
                )
                )}
        </View>
        </>
    )
}