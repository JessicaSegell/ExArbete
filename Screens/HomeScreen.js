import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import styled from 'styled-components';


const MenuItem = styled.TouchableOpacity`
    width: 40%;
    height: 25%;
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
    menuItem: {
        flex: 2,
        flexDirection: 'row',
        flexWrap: 'wrap',
        //alignItems: 'center',
        justifyContent: 'center',
    },
});

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.screen}>
            {/* <Text>Home</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Competition')}>
                <Text>Play!</Text>
            </TouchableOpacity> */}
            <View style={styles.top}>
                <HeaderText>PLU Polarn</HeaderText>
                <Image source={require('../assets/CashRegister.png')} />
            </View>
                <SubHeaderText>Välj en kategori</SubHeaderText>
            <View style={styles.menuItem}>
                <MenuItem>
                    <Text>Styled</Text>
                </MenuItem>
                <MenuItem>
                    <Text>Styled</Text>
                </MenuItem>
                <MenuItem>
                    <Text>Styled</Text>
                </MenuItem>
                <MenuItem>
                    <Text>Styled</Text>
                </MenuItem>
            </View>
        </View>
    )
};

export default HomeScreen;
