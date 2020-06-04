import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import * as actions from '../../../store/actions/index';
import { Colors } from '../../../constants/Colors';
import { SmallButton } from '../../Components/Styled/UI';
import { SmallText, HeaderText } from '../../Components/Styled/Text';

const SignInScreen = () => {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [newUser, setNewUser] = useState({ email: '', password: '' });

    const loggedIn = useSelector((state) => state.auth.loggedIn);
    const error = useSelector((state) => state.auth.error);
    const dispatch = useDispatch();

    const handleInput = () => {
        setNewUser({ email: userEmail, password: userPassword })
        console.log('handled input', newUser);
    };

    const handleFormValidation = () => {
        dispatch(actions.signIn(newUser));
        console.log(loggedIn, userPassword, userEmail, newUser)
    };

    return (
        <View style={styles.screen}>
            <View>
                <HeaderText>Logga in</HeaderText>
            </View>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    placeholder="example@email.com"
                    onChangeText={text => setUserEmail(text)}
                    value={userEmail}
                    onSubmitEditing={(value) => handleInput(value)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="password"
                    secureTextEntry={true}
                    autoCapitalize="none"
                    onChangeText={text => setUserPassword(text)}
                    value={userPassword}
                    onSubmitEditing={(value) => handleInput(value)}
                />
                <View>
                    {error ? <Text>{error.error}</Text> : null}
                </View>
                <SmallButton onPress={() => handleFormValidation()}>
                    <SmallText>Logga in</SmallText>
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
    form: {
        flex: 2,
        width: '80%',
        alignSelf: 'center',
        padding: 10,
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
});

export default SignInScreen;
