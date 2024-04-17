import React, { useEffect, useState } from "react";
import { Text, View, FlatList, StyleSheet, TouchableOpacity, TextInput, Image } from "react-native";

const Home = () => {
    const [searchInput, setSearchInput ] = useState('')
    const [videos, setVideos] = useState([]);

    const handleSearch = () => {
        if (searchInput.length != 0) {
            const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${encodeURIComponent(searchInput)}&type=video&key=AIzaSyBkR3k72mqHtfIhQbilLTwYLYYIlBJHXoc`;
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    setVideos(data.items);
                })
                .catch(error => console.error('Error:', error));
        }
    };
    return(
        <View style={styles.mainView}>
            <Text style={styles.Heading}>Videos Show</Text>
            <View style={styles.TextInputView}>
            <TextInput value={searchInput}
            onChangeText={(val) => setSearchInput(val)}
            placeholder={"Enter Song title or artist name"}
            placeholderTextColor={'#000'}
            style={styles.TextInput}></TextInput>
            <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
                <Text style={styles.searchButtonText}>Search</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.mainPostView}>
        <FlatList
                data={videos}
                keyExtractor={item => item.id.videoId}
                renderItem={({ item, index }) => (
                    <View style={styles.postView}>
                        <View style={styles.imageView}>
                        <Image
                            style={styles.thumbnail}
                            source={{ uri: item.snippet.thumbnails.medium.url }}
                        />
                        <View>
                            <Text>Name & Title</Text>
                        </View>
                        </View>
                        <View>
                            <Text>Options</Text>
                        </View>
                    </View>
                )}
            />
        </View>
    </View>
    )
}
const styles = StyleSheet.create({
    mainView:{
        flex: 1,
        alignItems:'center'
    },
    Heading: {
        fontSize: 32,
        marginTop: 60,
        marginLeft: 15,
        fontWeight: 'bold'
    },
    TextInput : {
        height: 39,
        width: '90%',
        backgroundColor:'#EBEBEB',
        borderRadius:20,
        paddingLeft:15,
        marginTop:20
    },
    TextInputView: {
        display: 'flex',
        alignItems: 'center'
    },
    mainPostView:{
        width:'90%',

    },
    postTitle: {
        width:'100%',
        display:'flex',
        justifyContent:'space-between',
        backgroundColor:'gray',
        flexDirection:'row'
    },
    postView: {
        width: '100%',
        alignItems:'center',
        marginTop: 20
    },
    thumbnail: {
        backgroundColor: 'rgba(0,0,0,0.06)',
        width: 50,
        height: 50,
        borderRadius: 50
    },
    imageView: {
        display:'flex',
        flexDirection: 'row',
    
    }
})
export default Home;