import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';

const Boat = ({ name, description, icon_name, picture }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}><Icon name={icon_name} size={20} color="white" /> {name}</Text>
            <Text style={styles.description}>{description}</Text>
            <Image source={picture} style={styles.image} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 0.3,
        borderColor: 'black',
        shadowColor: "black",
        elevation: 5,
        margin: 10,
        padding: 20,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        fontFamily: 'monospace',
        backgroundColor: 'cadetblue',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 8,
        marginBottom: 10,
        textAlign: 'center',
    },
    description: {
        fontSize: 16,
        color: 'dimgray',
        textAlign: 'center',
        paddingHorizontal: 10,
        marginBottom: 15,
    },
    image: {
        width: 300,
        height: 300,
        borderRadius: 10,
        borderWidth: 5,
        borderColor: 'steelblue',
        marginTop: 10,
    },
});

export default Boat;
