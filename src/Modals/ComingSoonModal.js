import React from 'react';
import {
    View,
    StyleSheet,
    Modal
}
    from 'react-native';
import { SubHeaderText, SmallText, AltItemText } from '../Components/Styled/Text';
import { SmallButton } from '../Components/Styled/UI';
import { Colors } from '../../constants/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ComingSoonModal = ({ visible, closeModal }) => {
    return (
        <Modal animationType="fade" visible={visible} transparent={true}>
            {/*  <TouchableOpacity onPress={closeModal}> */}
            <View style={styles.modal}>
                <SmallText color={Colors.pluBlue}>Coming Soon!</SmallText>
                <SmallButton onPress={closeModal}>
                    <SmallText color={Colors.pluBlue}>Ok</SmallText>  
                </SmallButton>
            </View>
            {/*     </TouchableOpacity> */}
            <View style={styles.btnContainer}>

                
            </View>
        </Modal>
    )
};

const styles = StyleSheet.create({
    modal: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        width: '50%',
        height: '15%',
        borderRadius: 10,
        borderWidth: 5,
        borderColor: Colors.pluBlue,
    },
    btnContainer: {
        flexDirection: 'row',
    },
});

export default ComingSoonModal;