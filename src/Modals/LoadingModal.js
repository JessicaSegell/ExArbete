import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, StyleSheet, Modal, ActivityIndicator, Dimensions, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Colors } from '../../constants/Colors';
import { SmallText } from '../Components/Styled/Text';


const LoadingModal = ({ visible, navigation }) => {
    return (
        <Modal visible={visible} animationType="fade" transparent={true}>
            <View style={styles.modal}>
                <Icon name="lightbulb" size={30} color={Colors.pluBlue} />
                <View style={styles.spinner}>
                    <ActivityIndicator size="large" color="grey" />
                </View>
                <SmallText color={Colors.pluBlue}>Loading...</SmallText>
            </View>
        </Modal>

    );
};

const styles = StyleSheet.create({
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: 'white',
        width: '80%',
        height: 200,
        marginTop: Dimensions.get('window').height / 3,
        borderWidth: 5,
        borderColor: Colors.pluBlue,
        borderRadius: 10,
    },
    spinner: {
        margin: 20,
    },
});

export default LoadingModal;
