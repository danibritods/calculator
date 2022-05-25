import { Text, TouchableOpacity } from "react-native"

export default (props) => {   
    function onPress(){
        switch (props.label) {
            case "C":
                props.setDisplay(" ")
                break;
            case "=":
                try {
                    props.setDisplay(eval(props.display))
                } catch (error) {
                    // props.setDisplay("Error, please reset.")
                    props.setDisplay(" ")
                }
                break;
            default:
                props.setDisplay(props.display + props.label)
                break;
        }
    }
    
    return (
        <TouchableOpacity 
          style={props.buttonStyle}
          onPress={onPress}
          >
            <Text>{props.label}</Text>
        </TouchableOpacity>
    )
}