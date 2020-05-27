import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, TouchableOpacity, Image, StyleSheet, Button, TextInput, FlatList } from 'react-native';
import * as actions from '../../../store/actions/index';
import store from '../../../store/store';
import GameModal from '../../Modals/GameModal';
import { Colors } from '../../../constants/Colors';
import { SmallButton } from '../../Components/Styled/UI';
import { SmallText, HeaderText, SubHeaderText } from '../../Components/Styled/Text';
import LoadingModal from '../../Modals/LoadingModal';
import styled from 'styled-components';
import CheckBoxModal from '../../Modals/CheckBoxModal';



const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
        PLU: 1234,
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
        PLU: 5678,
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
        PLU: 91011,
    },
];

const ListItem = styled.View`
    background-color: white;
    flex-direction: row;
    justify-content: space-between;
    border-radius: 10px;
    border-width: 3px;
    border-left-width: 5px;
    border-color: ${Colors.pluBlue};
    margin: 5px;
`;





function Item({ title, PLU }) {


    return (
        <ListItem>
            <SubHeaderText color="black">{title}</SubHeaderText>
            <SubHeaderText color="black">{PLU}</SubHeaderText>
        </ListItem>
    );
}

let itemList;


const MyPageScreen = () => {
    const [checked, setChecked] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    const toggleCheck = () => {
        console.log('fired')
        setChecked(checked == !!checked)
        console.log(checked);
    }
    /*  useEffect(() => {
         itemList = createList(DATA);
     }, []); */

    const createList = (DATA) => DATA.map((d) => (
        (
            <View key={d.id}>
                {console.log('fired', d.title)}
                <SubHeaderText color="black">{d.title}</SubHeaderText>
                <SubHeaderText color="black">{d.PLU}</SubHeaderText>
            </View>
        )));

    const fireCreate = () => {
        itemList = createList(DATA);
    }

    return (
        <View style={styles.screen}>
            <View>
                <HeaderText>Mina sidor</HeaderText>
            </View>
            <View style={styles.flatListContainer}>
                {itemList}
                {/*  <FlatList
                    data={DATA}
                    renderItem={({ item }) => <Item title={item.title} PLU={item.PLU} />}
                    keyExtractor={item => item.id}
                >
                </FlatList> */}
                {/*    <CheckBoxModal visible={modalVisible} items={DATA} /> */}
            </View>
            <View style={styles.btnContainer}>
                <SmallButton onPress={() => fireCreate()}>
                    <SmallText>Öva på lista</SmallText>
                </SmallButton>
                <SmallButton onPress={() => showModal()}>
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
