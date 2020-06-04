import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SmallButton } from '../../Components/Styled/UI';
import { SmallText, HeaderText, SubHeaderText } from '../../Components/Styled/Text';
import { Colors } from '../../../constants/Colors';

const AuthStartScreen = ({ navigation }) => {
    return (
        <View style={styles.screen}>
            <View style={styles.top}>
                <HeaderText>Välkommen!</HeaderText>
                <SubHeaderText>Logga in för att starta</SubHeaderText>
            </View>
            <View style={styles.buttons}>
                <SmallButton onPress={() => navigation.navigate('SignIn')}>
                    <SmallText>Logga in</SmallText>
                </SmallButton>
                <SmallButton onPress={() => navigation.navigate('CreateAccount')}>
                    <SmallText>Skapa konto</SmallText>
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
        height: '50%',
        justifyContent: 'center',
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignSelf: 'center',
    },
});

export default AuthStartScreen;
