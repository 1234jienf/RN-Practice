import React, { useEffect, useState, useRef } from "react";
import { Text, View, FlatList, StyleSheet, TouchableOpacity, TextInput, Image, ScrollView } from "react-native";
import {useScrollToTop} from "@react-navigation/native"

const Home = () => {
    const [searchInput, setSearchInput] = useState('');
    const [videos, setVideos] = useState([]);
    const ref = useRef(null)
    useScrollToTop(ref)
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        }).replace(/\//g, '.');
    };

    const handleSearch = () => {
        if (searchInput.length !== 0) {
            const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${encodeURIComponent(searchInput)}&type=video&key=AIzaSyBkR3k72mqHtfIhQbilLTwYLYYIlBJHXoc`;
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    setVideos(data.items);
                })
                .catch(error => console.error('Error:', error));
        }
    };

    const handleScroll = (event) => {
        console.log('Scrolled to:', event.nativeEvent.contentOffset.y);
    };

    return (
        <View style={styles.mainView}>
            <Text style={styles.Heading}>Video Showcase</Text>
            <View style={styles.TextInputView}>
                <TextInput
                    value={searchInput}
                    onChangeText={setSearchInput}
                    placeholder="Enter song title or artist name"
                    placeholderTextColor="#000"
                    style={styles.TextInput}
                />
                <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
                    <Text style={styles.searchButtonText}>Search</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={videos}
                ref={ref}
                keyExtractor={item => item.id.videoId}
                renderItem={({ item }) => (
                    <View style={styles.postView}>
                        <Image
                            style={styles.thumbnail}
                            source={{ uri: item.snippet.thumbnails.medium.url }}
                        />
                        <Text style={styles.titleText}>{item.snippet.title}</Text>
                        <Text style={styles.dateText}>{formatDate(item.snippet.publishedAt)}</Text>
                        <Text style={styles.channelTitle}>{item.snippet.channelTitle}</Text>
                    </View>
                )}
                onScroll={handleScroll}
                scrollEventThrottle={16}  // Adjust based on your needs for performance
            />
        </View>
    );
};

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#f0f0f0'
    },
    Heading: {
        fontSize: 32,
        marginTop: 30,
        fontWeight: 'bold'
    },
    TextInput: {
        height: 40,
        width: '90%',
        backgroundColor: '#EBEBEB',
        borderRadius: 20,
        paddingLeft: 15,
        marginTop: 10
    },
    TextInputView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    searchButton: {
        padding: 10,
        backgroundColor: '#007AFF',
        borderRadius: 20,
        marginLeft: 10
    },
    searchButtonText: {
        color: '#fff'
    },
    postView: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        marginVertical: 8,
        width: '90%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3
    },
    thumbnail: {
        width: '100%',
        height: 200,
        borderRadius: 10
    },
    titleText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10
    },
    dateText: {
        fontSize: 14,
        color: '#666'
    },
    channelTitle: {
        fontSize: 15,
        fontWeight: '500',
        color: '#000',
        marginTop: 5
    }
});

export default Home;
