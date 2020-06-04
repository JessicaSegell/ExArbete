import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Colors } from '../../../constants/Colors';
import { HeaderText } from '../../Components/Styled/Text';
import Icon from 'react-native-vector-icons/FontAwesome5';

const ComingSoonScreen = () => {
    return (
        <View style={styles.screen}>
            <HeaderText>Coming soon!</HeaderText>
            <Icon name="tools" size={60} color="white" />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.pluBlue,
        alignItems: 'center',
    },
});

export default ComingSoonScreen;
