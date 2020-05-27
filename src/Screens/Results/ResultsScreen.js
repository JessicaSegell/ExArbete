import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import * as actions from '../../../store/actions/index';
import { Colors } from '../../../constants/Colors';
import { SmallButton } from '../../Components/Styled/UI';
import { SmallText, HeaderText } from '../../Components/Styled/Text';

const ResultsScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>Hello results!</Text>
            <View>
                <HeaderText>Mina resultat</HeaderText>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.pluBlue,
    },
})

export default ResultsScreen;
