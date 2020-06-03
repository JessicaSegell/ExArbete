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
import { HeaderText, SubHeaderText, AltItemText } from '../Components/Styled/Text';
import { SmallButton } from '../Components/Styled/UI';
import { Colors } from '../../constants/Colors';


const GameModal = ({ navigation, visible, score, listSuggestion, save }) => {
    return (
        <Modal animationType="fade" visible={visible} transparent={true}>
            <View style={styles.modal}>
                <View style={styles.top}>
                    <HeaderText>Spelet slut!</HeaderText>
                    <SubHeaderText>Du fick {''}{score}{''} poäng</SubHeaderText>
                    {listSuggestion != null
                        ? <View>
                            <SubHeaderText>Du behöver träna mer på:</SubHeaderText>
                            {listSuggestion}
                            <SmallButton onPress={() => save()}>
                                <SubHeaderText>Spara listan</SubHeaderText>
                            </SmallButton>
                        </View>
                        : <View>
                            <SubHeaderText>Alla rätt, bra jobbat!</SubHeaderText>
                        </View>}
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
        height: '90%',
        borderRadius: 10,
        borderWidth: 5,
        borderColor: 'white',
    },
    top: {
        flex: 4,
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
