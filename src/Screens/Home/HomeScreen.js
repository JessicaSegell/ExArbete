import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, TouchableOpacity, Image, StyleSheet, Button } from 'react-native';
import styled from 'styled-components';
import { Colors } from '../../../constants/Colors';
import * as actions from '../../../store/actions/index';
import { HeaderText, SubHeaderText } from '../../Components/Styled/Text';
import { MenuItem } from '../../Components/Styled/UI';
import Icon from 'react-native-vector-icons/FontAwesome5';

const HomeScreen = ({ navigation }) => {

    const loggedIn = useSelector((state) => state.auth.loggedIn);
    const dispatch = useDispatch();
    console.log(loggedIn);

    const handleSignOut = () => {
        dispatch(actions.signOut());
        console.log('handle sign out ran', loggedIn);
    };

    return (
        <View style={styles.screen}>
            <View style={styles.top}>
                <HeaderText>PLU Polarn</HeaderText>
                <Image source={require('../../../assets/CashRegister.png')} />
            </View>
            <SubHeaderText>Vad vill du göra?</SubHeaderText>
            <View style={styles.menuItemsContainer}>
                    <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Category')}>
                        <SubHeaderText>Spela</SubHeaderText>
                        <Icon name="play" size={45} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem}>
                        <SubHeaderText>Öva</SubHeaderText>
                        <Icon name="graduation-cap" size={45} color="white" />
                    </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'space-between' }}>
                <Button title="Debug" onPress={() => navigation.navigate('Debug')} />
                <Icon name="sign-out-alt" size={40} color="white" onPress={() => handleSignOut()} />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.pluBlue,
    },
    top: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    menuItemsContainer: {
        flex: 2,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    menuItem: {
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 5,
        padding: 10,
        margin: 10,
        width: '40%',
        alignItems: 'center',
    },
    menuItemImg: {
        width: '100%',
        height: '100%',
    },
    menuTextContainer: {
        width: '100%',
        height: '40%',
        backgroundColor: 'pink',
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 5,
    },
});

export default HomeScreen;
