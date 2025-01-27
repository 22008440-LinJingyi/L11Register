import React, { useState } from 'react';
import { StatusBar, View, Button, Text, TextInput, StyleSheet, Alert } from 'react-native';

const Add = ({ navigation, route }) => {
    const [username, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone_number, setPhone] = useState("");

    return (
        <View style={styles.container}>
            <StatusBar />
            <Text style={styles.title}>Registration</Text>

            <TextInput
                style={styles.input}
                placeholder="Username"
                placeholderTextColor="#ccc"
                onChangeText={(text) => setName(text)}
            />

            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#ccc"
                keyboardType="email-address"
                onChangeText={(text) => setEmail(text)}
            />

            <TextInput
                style={styles.input}
                placeholder="Phone Number"
                placeholderTextColor="#ccc"
                keyboardType="phone-pad"
                onChangeText={(text) => setPhone(text)}
            />

            <Button
                title="Sign Up"
                color="#FF007F"
                onPress={() => {
                    let mydata = JSON.parse(route.params.datastr);
                    let item = { username: username, email: email, phone_number: phone_number };
                    mydata.push(item);
                    fetch('https://5308903fad174b69af17039ea178cb69.api.mockbin.io/', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: ''
                        },
                        body: JSON.stringify(mydata)
                    }).then((response) => {
                        navigation.navigate('Home');
                    });
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DFF2FF',
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 20
    },
    input: {
        width: '90%',
        height: 50,
        borderColor: '#ddd',
        borderWidth: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        marginVertical: 10,
        fontSize: 16,
        color: '#000'
    },
    button: {
        marginTop: 20,
        backgroundColor: '#FF007F',
        padding: 15,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});

export default Add;
