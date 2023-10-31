import React from "react";
import { TextInput, StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    textInput: {
        borderRadius: 5, 
        borderWidth: 1,
        borderColor: '#999',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginBottom: 10
    }
})

const StyledTextInput = ({style = {} , error,  ...props}) => {
  
    const inputStyle =  [
     Styles.textInput,
        style,
        error && Styles.error
    ]
    return <TextInput style= {inputStyle} {...props} />
}

export default StyledTextInput  