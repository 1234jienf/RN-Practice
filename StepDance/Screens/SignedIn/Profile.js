import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { auth } from "../../Firebase/firebase";
import { signOut as firebaseSignOut } from 'firebase/auth';  // Correctly import signOut

const Profile = ({ navigation, route }) => {
    const signOut = () => {
        firebaseSignOut(auth).then(() => {
            console.log('Signed out successfully!');
            // Optionally navigate to the login screen
        }).catch((error) => {
            console.error('Sign out error:', error);
        });
    }

    return (
        <View style={styles.mainView}>
            <TouchableOpacity onPress={signOut} style={styles.Button}>
                <Text style={styles.ButtonText}>
                    로그아웃
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        marginTop: 40,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    Button: {
        width: '90%',
        color: '#fff',
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
    TextButton: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    Icon: {
        marginLeft: 15,
        marginTop: 10
    }
});

export default Profile;
