import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../../store/actions/index';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Image } from 'react-native';
import { Colors } from '../../../constants/Colors';
import { NumKey, ZeroNumKey, EnterKey } from '../../Components/Styled/NumKey';
import { SmallText, SubHeaderText, AltItemText } from '../../Components/Styled/Text';
import GameModal from '../../Modals/GameModal';

let gameBox = null;
let score = 0;
let wrongAnswers = [];
let correctAnswers = [];
let newData = [];
let listSuggestion = null;


const CompetitionScreen = ({ navigation, route }) => {
    const { category } = route.params;
    const [value, setValue] = useState('');
    const [itemsFetched, setItemsFetched] = useState(false);
    const [gameStarted, setGameStarted] = useState(false);
    const [itemArray, setItemArray] = useState([]);
    const [itemPLU, setItemPLU] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    //const [wrongAnswers, setWrongAnswers] = useState([]);
    const [wrong, setWrong] = useState(null);
    const [listCreated, setListCreated] = useState(false);
    const wrongA = useRef(null);

    const items = useSelector((state) => state.items.items);
   // const user = useSelector((state) => state.user.user);
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
            setItemArray(items);
            setItemsFetched(true);
        }
    }, [items, itemsFetched]);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setItemsFetched(false);
            setGameStarted(false);
            setItemArray(null);
            gameBox = null;
            score = 0;
            wrongAnswers = [];
            newData = [];
            wrongA.current = null;
            listSuggestion = null;
        });
        return unsubscribe;
    }, [navigation]);

    const startGame = () => {
        console.log('game started, creating first list!');
        gameBox = createGameBox(itemArray);
        setGameStarted(true);
    };

    const createGameBox = (item) => {
        if (itemArray.length >= 1) {
            setItemPLU(item[0].plu);
            console.log(item[0].name, item[0].plu, itemArray.length);
            return (
                <View key={item[0].id}>
                    <View style={styles.imgBox}>
                        <Image style={styles.imgBox} source={{ uri: item[0].url }} />
                    </View>
                    <SmallText>{item[0].name}</SmallText>
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
            gameBox = createGameBox(itemArray);
        } else {
            setModalVisible(true);
            createListSuggestion();
        }
    };

    const onChangeHandler = (text) => {
        setValue(text);
    }

    const createListSuggestion = (item) => {
        if (newData.length != 0) {
            listSuggestion = newData.map(item => {
                return (
                    <View key={item.id} style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <AltItemText>{item.name}</AltItemText>
                        <AltItemText>{item.plu}</AltItemText>
                    </View>
                )
            });
        } else {
            return;
        }
    };

    const saveList = () => {
        console.log('list was saved!');
        dispatch(actions.createList(newData));
    };

    const onSubmitHandler = () => {

        if (value == itemPLU) {
            score += 1;
            let y = {};
            y = itemArray.shift();
            setItemArray(itemArray);
            // correctAnswers = [correctAnswers, { ...y }]
            console.log('correct! ', score, itemArray.length);
            // console.log('rätt:', correctAnswers);
            setValue('');
            toggleNextItem();
        } else {
            let x = {};
            x = itemArray.shift();
            setItemArray(itemArray);
            wrongA.current = x;
            newData.push(wrongA.current);
            setWrong(newData);
            console.log('not correct ', score, itemArray.length);
            setValue('');
            toggleNextItem();
        };
    };


    return (
        <View style={styles.screen}>
            <GameModal
                visible={modalVisible}
                navigation={navigation}
                score={score}
                listSuggestion={listSuggestion}
                save={saveList}
            />
            <View style={styles.top}>
                {gameStarted
                    ? gameBox
                    : (
                        <TouchableOpacity style={styles.startBtn} onPress={startGame}>
                            <SubHeaderText>Starta spel!</SubHeaderText>
                        </TouchableOpacity>
                    )
                }
                <TextInput
                    style={styles.input}
                    value={value}
                    onChangeText={text => onChangeHandler(text)}
                />
            </View>
            <View style={styles.numPadContainer}>
                <View style={styles.numPad}>
                    <NumKey onPress={() => setValue(value + '7')}>
                        <Text style={styles.keyNumber}>7</Text>
                    </NumKey>
                    <NumKey onPress={() => setValue(value + '8')}>
                        <Text style={styles.keyNumber}>8</Text>
                    </NumKey>
                    <NumKey onPress={() => setValue(value + '9')}>
                        <Text style={styles.keyNumber}>9</Text>
                    </NumKey>
                    <NumKey onPress={() => setValue(value + '4')}>
                        <Text style={styles.keyNumber}>4</Text>
                    </NumKey>
                    <NumKey onPress={() => setValue(value + '5')}>
                        <Text style={styles.keyNumber}>5</Text>
                    </NumKey>
                    <NumKey onPress={() => setValue(value + '6')}>
                        <Text style={styles.keyNumber}>6</Text>
                    </NumKey>
                    <NumKey onPress={() => setValue(value + '1')}>
                        <Text style={styles.keyNumber}>1</Text>
                    </NumKey>
                    <NumKey onPress={() => setValue(value + '2')}>
                        <Text style={styles.keyNumber}>2</Text>
                    </NumKey>
                    <NumKey onPress={() => setValue(value + '3')}>
                        <Text style={styles.keyNumber}>3</Text>
                    </NumKey>
                    <ZeroNumKey onPress={() => setValue(value + '0')}>
                        <Text style={styles.keyNumber}>0</Text>
                    </ZeroNumKey>
                    <NumKey onPress={() => setValue('')}>
                        <Text style={styles.keyNumber}>C</Text>
                    </NumKey>
                </View>
                <View style={{ width: '20%', justifyContent: 'flex-end' }}>
                    <EnterKey onPress={onSubmitHandler}>
                        <Text style={{ textAlign: 'center' }}>Enter</Text>
                    </EnterKey>
                </View>
            </View>
        </View>
    )
};

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
    startBtn: {
        borderWidth: 2,
        borderRadius: 5,
        borderColor: 'white',
    },
    imgBox: {
        width: 125,
        height: 125,
        backgroundColor: 'white',
    },
    input: {
        width: '75%',
        height: 50,
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: 'grey',
    },
    numPadContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    numPad: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        width: '70%',
    },
    keyNumber: {
        fontSize: 25,
        textAlign: 'center',
    },
});

export default CompetitionScreen;
