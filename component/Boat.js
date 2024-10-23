import React from "react";
import {Image, Text, View, StyleSheet} from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';

const Boat = ({name,description,icon_name,picture}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}><Icon name={icon_name}/>{name}</Text>
            <Text style={styles.description}>{description}</Text>
            <Image source={picture} style={{width:400,height:400}}/>
            <Text> </Text>
        </View>
    )
};


const styles= StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'grey',
        fontFamily: 'monospace'
    },
    description: {
        fontSize: 15,
        color: 'grey',
        textAlign: 'center',
    }
});

export default Boat;
