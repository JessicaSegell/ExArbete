import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Home</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Competition')}>
                <Text>Play!</Text>
            </TouchableOpacity>
        </View>
    )
}; 

export default HomeScreen;
