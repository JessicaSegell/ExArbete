import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Button, Image } from 'react-native';
import { Colors } from '../../../constants/Colors';
import * as actions from '../../../store/actions/index';
import Styled from 'styled-components';
import store from '../../../store/store';

let itemList = null;

const CompDebugScreen = ({ navigation, route }) => {
    const { category } = route.params;
    //console.log(category.name);
    const [itemsFetched, setItemsFetched] = useState(false);
    const [nextItem, setNextItem] = useState(false);
    const [gameStarted, setGameStarted] = useState(false);
    const [itemArray, setItemArray] = useState(null);

    const items = useSelector((state) => state.items.items);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!itemsFetched) {
            let categoryKey = category.id;
            setItemsFetched(false);
            dispatch(actions.getCategoryItems(categoryKey));
            console.log('dispatch action useEffect items: ')
        };
    }, []);

    useEffect(() => {
        if (items) {
            //console.log('useEffect create item list')
            //console.log(items[0])
            // itemList = createItemList(items);
            //itemList = singleItem(items);
            // itemList = poppedItem(items);
            setItemArray(items);
            setItemsFetched(true);
            console.log('ITEM ARRAY: ', itemArray);

        }
    }, [items, itemsFetched]);

    const startGame = () => {
        console.log('game started, creating first list!');
        itemList = createItemList(itemArray);
        setGameStarted(true);
    };

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setItemsFetched(false);
            setGameStarted(false);
            setItemArray(null);
            itemList = null;
        });
        return unsubscribe;
    }, [navigation]);

    let uri;

    const createItemList = (item) => {
        if (itemArray.length >= 1) {
            console.log(item[0].name, item[0].url);
            return (
                <View key={item[0].id}>
                    <View style={styles.imgBox}>
                        <Image style={styles.imgBox} source={{uri: item[0].url}} />
                    </View>
                    <Text>{item[0].name}</Text>
                    <Text>{item[0].plu}</Text>
                </View>
            )
        } else {
            return (
                <View>
                    <Text>Done!</Text>
                </View>
            )
        }

    };

    const toggleNextItem = () => {
        if (itemArray.length >= 1) {
           setItemArray(itemArray.shift());
            itemList = createItemList(itemArray);
            console.log('second create list ran')
        } else {
            console.log('no more items!')
            itemList = null;
        }
    };

    return (
        <View style={styles.screen}>
            <View style={styles.top}>
                <Text>{category.name}</Text>
                {gameStarted
                    ? itemList
                    : (<Button title="start game!" onPress={startGame}></Button>)
                }
            </View>
            <View style={styles.itemListContainer}>
                <Button title="Next item" onPress={toggleNextItem} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.pluBlue,
    },
    top: {
        alignItems: 'center',
        justifyContent: 'space-around',
        flex: 1,
    },
    imgBox: {
        width: 150,
        height: 150,
        backgroundColor: 'transparent',
    },
    getBtn: {
        flex: 1,
        width: '50%',
        alignSelf: 'center',
    },
    itemListContainer: {
        flex: 1,
        textAlign: 'center',
        alignSelf: 'center',
    },
});

export default CompDebugScreen;
