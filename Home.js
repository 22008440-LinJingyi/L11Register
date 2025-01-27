import React, { useState, useEffect } from 'react';
import { StatusBar, Button, FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        padding: 10,
    },
    headerButton: {
        backgroundColor: '#007BFF',
        paddingVertical: 10,
        marginBottom: 15,
        alignItems: 'center',
    },
    headerButtonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    listItem: {
        backgroundColor: '#FFF',
        padding: 15,
        marginBottom: 10,


    },
    usernameText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    emailText: {
        fontSize: 16,
        color: '#666',
        marginBottom: 5,
    },
    phoneText: {
        fontSize: 16,
        color: '#007BFF',
    },
});

const Home = ({ navigation }) => {
    const [myData, setMyData] = useState([]);

    useEffect(() => {
        // Fetch data from the API
        fetch('https://5308903fad174b69af17039ea178cb69.api.mockbin.io/')
            .then((response) =>{
                return response.json()
            })
            .then((myJson) => {
                setMyData(myJson);
            });
    }, []);

    const renderItem = ({ item, index, section}) => {
        return (
            <View style={styles.listItem}>
                <Text style={styles.usernameText}>{item.username}</Text>
                <Text style={styles.emailText}>{item.email}</Text>
                <Text style={styles.phoneText}>{item.phone_number}</Text>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <StatusBar />
            <TouchableOpacity
                style={styles.headerButton}
                onPress={() => navigation.navigate('Add', { datastr: JSON.stringify(myData) })}
            >
                <Text style={styles.headerButtonText}>Register</Text>
            </TouchableOpacity>
            <FlatList data={myData} renderItem={renderItem}
                      keyExtractor={(item, index) => index.toString()} />
        </View>
    );
};

export default Home;
