import React from 'react';
import {
    View,
    StyleSheet,
    Modal
}
    from 'react-native';
import { SubHeaderText, SmallText } from '../Components/Styled/Text';
import { SmallButton } from '../Components/Styled/UI';
import { Colors } from '../../constants/Colors';

const ConfirmSaveModal = ({ visible, closeModal }) => {
    return (
        <Modal animationType="fade" visible={visible} transparent={true}>
            <View style={styles.modal}>
                <View>
                    <SubHeaderText>Listan sparad!</SubHeaderText>
                </View>
                <View style={styles.btnContainer}>

                    <SmallButton onPress={closeModal}>
                        <SmallText>Ok</SmallText>
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

export default ConfirmSaveModal;