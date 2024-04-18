import React from "react";
import { Text,FlatList,ScrollView, TouchableOpacity, View, Image,StyleSheet } from "react-native";
import { auth } from "../../Firebase/firebase";
import { signOut as firebaseSignOut } from 'firebase/auth';  // Correctly import signOut
import { LinearGradient } from 'expo-linear-gradient';
import { color } from "react-native-elements/dist/helpers";

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
        
        <LinearGradient
            colors={['#0B1238', '#286ECA']}
            style={styles.mainView}
            >
            <View style={styles.view2}>
                <Image
                resizeMode="auto"
                source={{
                    uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/80a342fa41b06f49eb4ae5a6b364aa90a2f6e483cd7b5cb338a70bcb93d9e50b?",
                }}
                style={styles.logo}
                />
                <View style={styles.myPageView}>
                    <Text style={styles.myPageText}>MYPAGE</Text>
                </View>
            </View>
            <TouchableOpacity onPress={signOut} style={styles.Button}>
                <Text style={styles.ButtonText}>
                    로그아웃
                </Text>
            </TouchableOpacity>
            <View style={styles.view4}>
                <View style={styles.view5}>
                <Text style={styles.pageCenter}>
                    김싸피
                    <br />
                    RANK 9999
                    <br />
                    1점
                    <br />
                </Text>
                </View>
                <View style={styles.view6}>
                <Text>춤춘 영상 3개</Text>
                </View>
                <View style={styles.view7}>
                <Image
                    resizeMode="auto"
                    source={{
                    uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/6d0d802c93619d330c11a6b36e3d6ff9e8575ab8dfa07e52cc8d66e9572f88d6?",
                    }}
                    style={styles.image2}
                />
                <Image
                    resizeMode="auto"
                    source={{
                    uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/6d0d802c93619d330c11a6b36e3d6ff9e8575ab8dfa07e52cc8d66e9572f88d6?",
                    }}
                    style={styles.image3}
                />
                <Image
                    resizeMode="auto"
                    source={{
                    uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/6d0d802c93619d330c11a6b36e3d6ff9e8575ab8dfa07e52cc8d66e9572f88d6?",
                    }}
                    style={styles.image4}
                />
                </View>
            </View>
            <Image
                resizeMode="auto"
                source={{
                uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/7da0573cb48de0345e01e12d3c63a245d516cc4162c6cfe432c54be8fc1b30a3?",
                }}
                style={styles.image5}
            />
            <View style={styles.view8}>
                <View style={styles.view9}>
                <View style={styles.view10}>
                    <Image
                    resizeMode="auto"
                    source={{
                        uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/bd0c93c027b76fb785d30779e0d2dd7d01ab320a1eeaf935cd4f965a0c0c011a?",
                    }}
                    style={styles.image6}
                    />
                    <Image
                    resizeMode="auto"
                    source={{
                        uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/21cd4e65005017a1d8e3867603eced37f96028c9a20c8246f60a335cadbf5881?",
                    }}
                    style={styles.image7}
                    />
                </View>
                <View style={styles.view11}>
                    <View style={styles.view12}>
                    <Text>홈</Text>
                    </View>
                    <View style={styles.view13}>
                    <Text>업로드</Text>
                    </View>
                </View>
                </View>
                <View style={styles.view14}>
                <Image
                    resizeMode="auto"
                    source={{
                    uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/924940c7210b6d9d1a62714951b958b657fc05712b640430da7831384eca9c85?",
                    }}
                    style={styles.image8}
                />
                <View style={styles.view15}>
                    <Text>마이페이지</Text>
                </View>
                </View>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        alignItems: 'center',
        padding: "32px 0 12px",
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
    },
    view2: {
        display: "flex",
        width: "100%",
        alignItems: "stretch",
        gap: 20,
        fontSize: 35,
        color: "#FFF",
        fontWeight: "900",
        whiteSpace: "nowrap",
      },
      logo: {
        position: "relative",
        width: 94,
        flexShrink: 0,
        aspectRatio: "1.52",
        marginTop: 20,
      },
      myPageView:{
        marginRight: 10,
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: "auto",
      },
      myPageText: {
        fontFamily: "Inter",  // 'Inter' 폰트가 앱에 추가되어 있어야 합니다.
        fontStyle: "italic",
        alignSelf: "end",
        color: 'white',
        fontSize: 35,
        fontWeight: "950",
        marginTop: -60,  
        marginRight: 30
    },
    pageCenter: {
        fontFamily: "Inter",
        fontStyle: "italic",
        fontSize: 35,
        fontWeight: "950",
        color: 'white',
        textAlign: 'center', // 텍스트를 중앙 정렬
    },
    
      view4: {
        display: "flex",
        marginTop: 122,
        width: "100%",
        flexDirection: "column",
        alignItems: "stretch",
        padding: "0 18px",
      },
      view5: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        color: "#FFF",
    },
    
      view6: {
        color: "#FFF",
        textAlign: "center",
        marginTop: 72,
        font: "italic 900 24px Inter, sans-serif ",
      },
      view7: {
        display: "flex",
        marginTop: 31,
        alignItems: "stretch",
        gap: 20,
        justifyContent: "space-between",
      },
      image2: { position: "relative", width: 79, flexShrink: 0, aspectRatio: "1" },
      image3: { position: "relative", width: 79, flexShrink: 0, aspectRatio: "1" },
      image4: { position: "relative", width: 79, flexShrink: 0, aspectRatio: "1" },
      image5: {
        strokeWidth: 3,
        stroke: "#FFF",
        borderColor: "rgba(255, 255, 255, 1)",
        borderStyle: "solid",
        borderWidth: 3,
        position: "relative",
        marginTop: 163,
        width: "100%",
        aspectRatio: "100",
      },
      view8: {
        alignSelf: "center",
        display: "flex",
        marginTop: 15,
        width: "100%",
        maxWidth: 284,
        alignItems: "stretch",
        gap: 20,
        justifyContent: "space-between",
      },
      view9: { display: "flex", flexDirection: "column", alignItems: "stretch" },
      view10: {
        display: "flex",
        alignItems: "start",
        gap: 20,
        justifyContent: "space-between",
      },
      image6: {
        fill: "#FFF",
        position: "relative",
        width: 41,
        flexShrink: 0,
        aspectRatio: "1.18",
      },
      image7: {
        fill: "#FFF",
        position: "relative",
        width: 45,
        flexShrink: 0,
        marginLeft: 52,
        aspectRatio: "1.25",
      },
      view11: {
        alignSelf: "start",
        display: "flex",
        alignItems: "stretch",
        gap: 20,
        fontSize: 14,
        color: "#FFF",
        fontWeight: "900",
        whiteSpace: "nowrap",
        justifyContent: "space-between",
        margin: "15px 0 0 14px",
      },
      view12: {
        fontFamily: "Inter, sans-serif",
        fontStyle: "italic",
      },
      view13: {
        fontFamily: "Inter, sans-serif",
        fontStyle: "italic",
        marginLeft: 63,
      },
      view14: {
        alignSelf: "start",
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        fontSize: 14,
        color: "#FFF",
        fontWeight: "900",
        whiteSpace: "nowrap",
      },
      image8: {
        fill: "#FFF",
        alignSelf: "center",
        position: "relative",
        width: 41,
        aspectRatio: "1",
      },
      view15: {
        fontFamily: "Inter, sans-serif",
        fontStyle: "italic",
        marginTop: 9,
      },
});

export default Profile;
