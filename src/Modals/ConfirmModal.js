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
import { HeaderText, SubHeaderText, AltItemText, SmallText } from '../Components/Styled/Text';
import { SmallButton } from '../Components/Styled/UI';
import { Colors } from '../../constants/Colors';

const ConfirmModal = ({ visible, navigation}) => {
    return (
        <Modal animationType="fade" visible={visible} transparent={true}>
            <View style={styles.modal}>
                <View>
                    <SubHeaderText>Vill du ta bort föremålet från listan?</SubHeaderText>
                </View>
                <View style={styles.btnContainer}>
                    <SmallButton>
                        <SmallText>Ja</SmallText>
                    </SmallButton>
                    <SmallButton onPress={() => navigation.navigate('Home')}>
                        <SmallText>Nej</SmallText>
                    </SmallButton>
                </View>
            </View>
        </Modal>
    )
};

const styles = StyleSheet.create({
    modal: {
        backgroundColor: Colors.pluBlue,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        width: '85%',
        height: '50%',
        borderRadius: 10,
        borderWidth: 5,
        borderColor: 'white',
    },
    btnContainer: {
        flexDirection: 'row',
    },
});

export default ConfirmModal;
