import React from "react";
import { Text, StyleSheet, View } from "react-native";

const SignUp = () => {
    return(
        <View style={styles.mainView}>
            <Text>Sign Up</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        marginTop:40,
        flex: 1, 
        flexDirection: 'column',
        justifyContent:'center',
        alignItems: 'center'        
    },
    textStyle : {

    }
})

export default SignUp