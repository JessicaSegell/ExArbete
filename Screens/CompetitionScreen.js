import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const CompetitionScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Competition</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text>Go home</Text>
            </TouchableOpacity>
        </View>
    )
};

export default CompetitionScreen;
