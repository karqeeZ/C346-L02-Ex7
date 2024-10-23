import React from "react";
import {Image, Text, View} from "react-native";

const Boat = ({name,description,picture}) => {
    return (
        <View>
            <Text>{name}</Text>
            <Text>{description}</Text>
            <Image source={picture} style={{width:400,height:350}}/>
        </View>
    )
};export default Boat;
