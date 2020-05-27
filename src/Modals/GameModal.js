import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Button,
    Image,
    Modal
}
    from 'react-native';
import { HeaderText, SubHeaderText } from '../Components/Styled/Text';
import { SmallButton } from '../Components/Styled/UI';
import { Colors } from '../../constants/Colors';


const GameModal = ({ navigation, visible, score }) => {
    return (
        <Modal animationType="fade" visible={visible} transparent={true}>
            <View style={styles.modal}>
                <View style={styles.top}>
                    <HeaderText>Spelet slut!</HeaderText>
                    <SubHeaderText>Du fick</SubHeaderText>
                    <SubHeaderText>{score}</SubHeaderText>
                    <SubHeaderText>poäng</SubHeaderText>
                </View>
                <View style={styles.btnContainer}>
                    <SmallButton onPress={() => navigation.navigate('Home')}>
                        <SubHeaderText>Hem</SubHeaderText>
                    </SmallButton>
                    <SmallButton onPress={() => navigation.navigate('Category')}>
                        <SubHeaderText>Spela igen</SubHeaderText>
                    </SmallButton>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modal: {
        // flex: 1,
        backgroundColor: Colors.pluBlue,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        width: '85%',
        height: '70%',
        borderRadius: 10,
        borderWidth: 5,
        borderColor: 'white',
    },
    top: {
        flex: 2,
        padding: 10,
    },
    btnContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        padding: 20,
    },
});

export default GameModal;
