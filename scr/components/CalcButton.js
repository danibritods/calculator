import { Text, TouchableOpacity } from "react-native"

export default (props) => {   
    function onPress(){
        switch (props.label) {
            case "AC":
                props.setDisplay(" ")
                break;
            case "=":
                if(props.display === " "){
                    
                } else 
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
            <Text style={props.textStyle}>{props.label}</Text>
        </TouchableOpacity>
    )
}