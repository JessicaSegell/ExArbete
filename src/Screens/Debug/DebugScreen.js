import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, StyleSheet, Button } from 'react-native';
import GameModal from '../../Modals/GameModal';
import { Colors } from '../../../constants/Colors';
import LoadingModal from '../../Modals/LoadingModal';
import ConfirmModal from '../../Modals/ConfirmModal';
import ConfirmSaveModal from '../../Modals/ConfirmSaveModal';
import * as actions from '../../../store/actions/index';
import ComingSoonModal from '../../Modals/ComingSoonModal';

const DebugScreen = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);  
    const [loadingVisible, setLoadingVisible] = useState(false);
    const [listFetched, setListFetched] = useState(false);

    //const myList = useSelector((state) => state.userList.userList)

    //const dispatch = useDispatch()



    return (
        <View style={styles.screen}>
            <View style={styles.top}>
                <Text>Hello Debug!</Text>
            </View>
            {/* <GameModal visible={modalVisible} navigation={navigation} /> */}
            {/* <ConfirmModal visible={modalVisible} navigation={navigation} /> */}
            {/* <ConfirmSaveModal visible={modalVisible} navigation={navigation} /> */}
            <ComingSoonModal visible={modalVisible} closeModal={() => setModalVisible(false)} />
            {/* <LoadingModal visible={loadingVisible} navigation={navigation} /> */}
            <View style={styles.buttons}>
                <Button title="Show Coming soon modal" onPress={() => setModalVisible(true)} />
                {/* <Button title="My Page" onPress={() => navigation.navigate('MyPage')} /> */}
                <Button title="Results" onPress={() => navigation.navigate('Results')} />
                <Button title="Loadingmodal" onPress={() => setLoadingVisible(true)} />
               {/*  <Button title="Show modal" onPress={() => setModalVisible(true)} /> */}
                {/* <Button title="SignIn" onPress={() => navigation.navigate('SignIn')} /> */}
               {/*  <Button title="Create account" onPress={() => navigation.navigate('CreateAccount')} /> */}
               {/*  <Button title="Auth start" onPress={() => navigation.navigate('AuthStart')} /> */}
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    top: {
        flex: 1,
    },
    buttons: {
        /* flexDirection: 'row',
        flexWrap: 'wrap', */
        flex: 3,
        justifyContent: 'space-around',
        marginBottom: 50,
        width: '80%',
        marginTop: 20,
        alignSelf: 'center',
    },
});

export default DebugScreen;
