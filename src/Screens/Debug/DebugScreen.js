import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, TouchableOpacity, Image, StyleSheet, Button, TextInput } from 'react-native';
import * as actions from '../../../store/actions/index';
import store from '../../../store/store';
import GameModal from '../../Modals/GameModal';
import { Colors } from '../../../constants/Colors';
import { SmallButton } from '../../Components/Styled/UI';
import { SmallText } from '../../Components/Styled/Text';
import LoadingModal from '../../Modals/LoadingModal';

const DebugScreen = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [loadingVisible, setLoadingVisible] = useState(false);
    const [value, setValue] = useState('');
    const [newUser, setNewUser] = useState(null);
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');


    const user = useSelector((state) => state.form.user);
    const dispatch = useDispatch();

    const textChangeHandler = (text, id) => {
        setValue(text);
    };

    const submitEditHandler = () => {
        // setNewUser(value);

        console.log(userEmail, userPassword, value);

    }

    const submitHandler = () => {
        setNewUser({ email: userEmail, password: userPassword });
        let newEmail = newUser.email;
        let newPassword = newUser.password;
        dispatch(actions.signUpNewUser(newEmail, newPassword));
        console.log(newUser.email);
    }


    return (
        <View style={styles.screen}>
            <View style={styles.top}>
                <Text>Hello Debug!</Text>
            </View>
            <GameModal visible={modalVisible} navigation={navigation} />
            {/* <LoadingModal visible={loadingVisible} navigation={navigation} /> */}
            <View style={styles.buttons}>
                <Button title="My Page" onPress={() => navigation.navigate('MyPage')} />
                <Button title="Results" onPress={() => navigation.navigate('Results')} />
                <Button title="Loadingmodal" onPress={() => setLoadingVisible(true)} />
                <Button title="Show modal" onPress={() => setModalVisible(true)} />
                <Button title="SignIn" onPress={() => navigation.navigate('SignIn')} />
                <Button title="Create account" onPress={() => navigation.navigate('CreateAccount')} />
                <Button title="Auth start" onPress={() => navigation.navigate('AuthStart')} />
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
    form: {
        flex: 2,
        width: '80%',
        alignSelf: 'center',
        padding: 10,
        // justifyContent: 'space-around',
        //alignItems: 'center',
        backgroundColor: Colors.pluBlue,
    },
    input: {
        borderWidth: 2,
        borderRadius: 5,
        borderColor: 'grey',
        backgroundColor: 'white',
        marginTop: 10,
        padding: 10,
        fontSize: 20,
    },
    categoryBtn: {
        width: 50,
        height: 50,
        backgroundColor: 'pink',
    },
})

export default DebugScreen
