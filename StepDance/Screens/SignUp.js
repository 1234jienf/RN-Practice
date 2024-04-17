import React, { useState } from "react";
import { 
    Text, 
    View,
    StyleSheet,
    Animated, 
    TextInput,
    TouchableOpacity, 
    ScrollView,
    } 
    from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import BackIcon from "react-native-vector-icons/Feather";
import { auth } from "../Firebase/firebase"; // Import auth instance
import { createUserWithEmailAndPassword } from "firebase/auth"; // Ensure this is imported
import { Button, Overlay } from "react-native-elements";
import FormError from "../Components/FormError";
import FormSuccess from "../Components/FormSuccess";

const SignUp = ({navigation}) => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage]=useState('');
    const [mobile, setMobile] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [displayFormErr, setDisplayFormErr] = useState(false);

    function fullNameChange(value) {
        setFullName(value)
    }
    function navigate(){
        navigation.navigate("signIn")
    }
    function createUser() {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then(()=>{
            setIsLoading(false);
            setSuccessMessage("Your account has been created");
        })
        .catch((err)=>{
            setIsLoading(false)
            setErrorMessage(err.message)
            setDisplayFormErr(true);
        })
    }

    const validateForm = () =>{
        var form_input = [fullName, email, mobile, password, confirmPassword];
        var passwords_match = password == confirmPassword;
    
        if(form_input.includes('') || form_input.includes(undefined)){
            setErrorMessage("Please Fill in all fields");
            return setDisplayFormErr(true);
        }
        if(!passwords_match){
            setErrorMessage("Passwords do not match");
            return setDisplayFormErr(true);
        }
        if(passwords_match) 
        return createUser();
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
                    onChangeText={fullNameChange}
                    value={fullName}
                    placeholder={"Full Name"}
                    placeholderTextColor={"#fff"}
                    style={styles.TextInput}/>
                    <TextInput 
                    onChangeText={(val)=>setEmail(val)}
                    placeholder={"Email Address"}
                    placeholderTextColor={"#fff"}
                    style={styles.TextInput}/>
                    <TextInput
                    onChangeText={(val)=>setMobile(val)}
                    placeholder={"Mobile"}
                    placeholderTextColor={"#fff"}
                    style={styles.TextInput}/>
                    <TextInput
                    onChangeText={(val)=>setPassword(val)}
                    placeholder={"Password"}
                    secureTextEntry={true}
                    placeholderTextColor={"#fff"}
                    style={styles.TextInput}/>
                    <TextInput
                    onChangeText={(val)=>setConfirmPassword(val)}
                    placeholder={"Confirm Password"}
                    secureTextEntry={true}
                    placeholderTextColor={"#fff"}
                    style={styles.TextInput}/>
                    <TouchableOpacity 
                    onPress={validateForm}
                    style={styles.Button}>
                        <Text style={styles.ButtonText}>회원 가입</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            {displayFormErr == true?
            <FormError 
            hideErrOverlay={setDisplayFormErr}
            err={errorMessage}
            />
            :
            null
            }
            {isLoading == true?
                <FormSuccess/>
                :
                successMessage == "Your account has been created"?
                    <FormSuccess 
                    successMessage={successMessage}
                    close={setSuccessMessage}/>
                :
                null
            }
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