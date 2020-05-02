import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import styled from 'styled-components';

const MenuItem = styled.TouchableOpacity`
    width: 40%;
    height: 30%;
    margin: 10px;
    background-color: white;
    border-radius: 5px;
    border: 2px;
    border-color: black;
`;

const HeaderText = styled.Text`
    color: white;
    font-size: 28px;
    font-family: kalam-bold;
    margin: 5px;
`;

const SubHeaderText = styled.Text`
    color: white;
    font-size: 22px;
    font-family: kalam-regular;
    margin: 5px;
    text-align: center;
`;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#B4D0EA',
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

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.screen}>
            <View style={styles.top}>
                <HeaderText>PLU Polarn</HeaderText>
                <Image source={require('../assets/CashRegister.png')} />
            </View>
            <SubHeaderText>Välj en kategori</SubHeaderText>
            <View style={styles.menuItemsContainer}>
                <MenuItem onPress={() => navigation.navigate('Competition')}>
                    <Image style={styles.menuItemImg} source={require('../assets/fruitImg.png')} />
                   {/*  <View style={styles.menuTextContainer}>
                        <SubHeaderText>Frukt</SubHeaderText>
                    </View> */}
                </MenuItem>
                <MenuItem>
                    <Image style={styles.menuItemImg} source={require('../assets/vegetablesImg.png')} />
                   {/*  <View style={styles.menuTextContainer}>
                        <SubHeaderText>Grönsaker</SubHeaderText>
                    </View> */}
                </MenuItem>
                <MenuItem>
                    <Image style={styles.menuItemImg} source={require('../assets/breadImg.png')} />
                   {/*  <View style={styles.menuTextContainer}>
                        <SubHeaderText>Bröd</SubHeaderText>
                    </View> */}
                </MenuItem>
                <MenuItem>
                    <Image style={styles.menuItemImg} source={require('../assets/ovrigt.png')} />
                   {/*  <View style={styles.menuTextContainer}>
                        <SubHeaderText>Övrigt</SubHeaderText>
                    </View> */}
                </MenuItem>
            </View>
        </View>
    )
};

export default HomeScreen;
