import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { Colors } from '../../../constants/Colors';
import Styled from 'styled-components';

const NumKey = Styled.TouchableOpacity`
    width: 75px;
    height: 75px;
    background-color: white;
    border-radius: 10px;
    border-width: 10px;
    border-color: grey;
    margin: 2px;
`;

const ZeroNumKey = Styled.TouchableOpacity`
    width: 150px;
    height: 75px;
    background-color: white;
    border-radius: 10px;
    border-width: 10px;
    border-color: grey;
    margin: 2px;
`;

const EnterKey = Styled.TouchableOpacity`
    width: 75px;
    height: 150px;
    background-color: white;
    border-radius: 10px;
    border-width: 10px;
    border-color: grey;
    margin: 2px;
`;

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
        //flex: 1,
        justifyContent: 'center',
    },
    numPad: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        width: '70%',
        // backgroundColor: 'blue',
    },
    keyNumber: {
        fontSize: 25,
        textAlign: 'center',
    },
});

const CompetitionScreen = ({ navigation }) => {
    const [value, setValue] = useState();

    const onChangeHandler = (id) => {
        const number = Object.keys(toString(id));
        console.log(number);
        setValue(number);
    }

    const onSubmitHandler = () => {
        const guess = value;
        console.log(guess);
        setValue('');
    }


    return (
        <View style={styles.screen}>
            <View style={styles.top}>
                <View style={styles.imgBox}>
                </View>
                <TextInput style={styles.input} value={value} />
            </View>
            <View style={styles.numPadContainer}>
                <View style={styles.numPad}>
                    <NumKey onPress={() => setValue(value + '1')}>
                        <Text style={styles.keyNumber}>1</Text>
                    </NumKey>
                    <NumKey onPress={() => setValue(value + '2')}>
                        <Text style={styles.keyNumber}>2</Text>
                    </NumKey>
                    <NumKey onPress={() => setValue(value + '3')}>
                        <Text style={styles.keyNumber}>3</Text>
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
                    <NumKey onPress={() => setValue(value + '7')}>
                        <Text style={styles.keyNumber}>7</Text>
                    </NumKey>
                    <NumKey onPress={() => setValue(value + '8')}>
                        <Text style={styles.keyNumber}>8</Text>
                    </NumKey>
                    <NumKey onPress={() => setValue(value + '9')}>
                        <Text style={styles.keyNumber}>9</Text>
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
                    <Text style={{textAlign: 'center'}}>Enter</Text>
                    </EnterKey>
                </View>
            </View>
        </View>
    )
};

export default CompetitionScreen;
