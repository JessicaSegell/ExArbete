import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, TouchableOpacity, Image, StyleSheet, Button, TextInput, FlatList } from 'react-native';
import * as actions from '../../../store/actions/index';
import store from '../../../store/store';
import GameModal from '../../Modals/GameModal';
import { Colors } from '../../../constants/Colors';
import { SmallButton } from '../../Components/Styled/UI';
import { SmallText, HeaderText, SubHeaderText, AltItemText } from '../../Components/Styled/Text';
import LoadingModal from '../../Modals/LoadingModal';
import styled from 'styled-components';
import CheckBoxModal from '../../Modals/CheckBoxModal';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ConfirmModal from '../../Modals/ConfirmModal';


let itemList;

const MyPageScreen = ({ navigation }) => {
    const [checked, setChecked] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [listFetched, setListFetched] = useState(false);
    const [listArray, setListArray] = useState(null);

    const list = useSelector((state) => state.userList.userList);
    const loading = useSelector((state) => state.userList.loading);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!listFetched) {
            setListFetched(false);
            dispatch(actions.getList());
        }
    }, []);

 /*    useEffect(() => {
        if (!listFetched) {
            setListFetched(false);
           // dispatch(actions.getCategoryItems(categoryKey));
            console.log('dispatch action useEffect items: ')
        };
    }, []); */

    useEffect(() => {
        if (list) {
            setListArray(list);
            setListFetched(true);
            itemList = createItemList(listArray);
            console.log('List:', list, 'ListArray:', listArray)
        }
    }, [list, listFetched]);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setListFetched(false);
            //setListArray(null);
        });
        return unsubscribe;
    }, [navigation]);

    const createItemList = (list) => list.map((item) => {
        return (
            <View key={item.id} style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <ConfirmModal visible={modalVisible} navigation={navigation} />
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <AltItemText>{item.name}</AltItemText>
                    <AltItemText>{item.plu}</AltItemText>
                </View>
                <SmallButton>
                    <Icon name="trash-alt" size={30} onPress={() => setModalVisible(true)} />
                </SmallButton>
            </View>
        )
    });

    return (
        <View style={styles.screen}>
            {
                loading
                    ? <LoadingModal />
                    : null
            }
            <View>
                <HeaderText>Mina sidor</HeaderText>
            </View>
            <View style={styles.flatListContainer}>
                {itemList}
            </View>
            <View style={styles.btnContainer}>
                <SmallButton>
                    <SmallText>Öva på lista</SmallText>
                </SmallButton>
                <SmallButton>
                    <SmallText>Editera</SmallText>
                </SmallButton>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.pluBlue,
    },
    top: {
        flex: 1,
    },
    flatListContainer: {
        // alignItems: 'center',
        flex: 2,
        borderWidth: 2,
        borderColor: 'black',
        backgroundColor: 'white',
    },
    btnContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
    },
});

export default MyPageScreen;
