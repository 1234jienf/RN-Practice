import React from "react";
import { 
    Text, 
    View,
    StyleSheet,
    Animated, 
    TextInput,
    TouchableOpacity, 
    ScrollView
    } 
    from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import BackIcon from "react-native-vector-icons/Feather";
import Icon from "react-native-vector-icons/Feather";

const SignUp = ({navigation}) => {
    function navigate(){
        navigation.navigate("signIn")
    }
    return(
        <View style={styles.mainView}>
            <LinearGradient
                colors={['black', '#737373']}
                style={styles.gradientView}>
                <Text style={styles.appTitle}>STEP</Text>
            </LinearGradient>
            <View style={styles.middleView}>
                <Text style={styles.appSubtitle}>TO</Text>
            </View>
            <LinearGradient
                colors={['#737373', 'black']}
                style={styles.gradientView}>
                <Text style={styles.appTitle}>DANCE</Text>
            </LinearGradient>
            <ScrollView
            style={styles.BottomView}>
                <BackIcon
                onPress={navigate} 
                style={styles.Icon} 
                name="chevron-left" 
                size={60} 
                color={'#fff'}/>
                <Text style={styles.Heading}>
                    Create{'\n'}
                    Account
                </Text>
                <View style={styles.FormView}>
                    <TextInput 
                    placeholder={"Full Name"}
                    placeholderTextColor={"#fff"}
                    style={styles.TextInput}/>
                    <TextInput 
                    placeholder={"Email Address"}
                    placeholderTextColor={"#fff"}
                    style={styles.TextInput}/>
                    <TextInput 
                    placeholder={"Mobile"}
                    placeholderTextColor={"#fff"}
                    style={styles.TextInput}/>
                    <TextInput 
                    placeholder={"Password"}
                    secureTextEntry={true}
                    placeholderTextColor={"#fff"}
                    style={styles.TextInput}/>
                    <TextInput 
                    placeholder={"Confirm Password"}
                    secureTextEntry={true}
                    placeholderTextColor={"#fff"}
                    style={styles.TextInput}/>
                    <TouchableOpacity style={styles.Button}>
                        <Text style={styles.ButtonText}>회원 가입</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
    },
    gradientView: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
    },
    middleView: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 20,
        backgroundColor: '#737373'
    },
    appTitle: {
        fontSize: 36,
        fontWeight: 'bold',
        color: 'white',
    },
    appSubtitle: {
        fontSize: 20,
        color: 'white',
    },
    BottomView: {
        width: '100%',
        height: "30%",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    ImageStyle: {
        width: '60%',
        resizeMode:'contain'
    },
    Heading: {
        color:'#fff',
        fontSize: 36,
        fontWeight:'bold',
        marginLeft:30,
        marginTop: 60
    },
    FormView : {
        width:'100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: 40
    },
    TextInput : {
        width:'90%',
        borderWidth: 1,
        borderColor: '#fff',
        height: 22,
        borderRadius: 10,
        paddingLeft: 5,
        marginTop: 20,
        marginLeft: 15,
        color:'#fff'
    },
    Button : {
        width: '90%',
        color:'#fff',
        height: 32, 
        backgroundColor: '#fff',
        borderRadius: 10,
        marginTop: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15
    },
    ButtonText: {
        fontWeight: 'bold',
        fontSize: 18
    },
    SignUpText:{
        color:'gray',
    },
    TextButton: {
        width: '100%',
        display: 'flex',
        alignItems:'center',
        justifyContent: 'center',
        marginTop: 20
    },
    Icon: {
        marginLeft: 15,
        marginTop:10
    }
});
export default SignUp