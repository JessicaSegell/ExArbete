import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, TouchableOpacity, Image, StyleSheet, Button } from 'react-native';
import { Colors } from '../../../constants/Colors';
import * as actions from '../../../store/actions/index';
import { HeaderText, SubHeaderText } from '../../Components/Styled/Text';
import Icon from 'react-native-vector-icons/FontAwesome5';

const HomeScreen = ({ navigation }) => {

    const loggedIn = useSelector((state) => state.auth.loggedIn);
    const dispatch = useDispatch();
    console.log(loggedIn);

    const handleSignOut = () => {
        dispatch(actions.signOut());
        console.log('handle sign out ran', loggedIn);
    };

    return (
        <View style={styles.screen}>
            <View style={styles.top}>
                <HeaderText>PLU Polarn</HeaderText>
                <Image source={require('../../../assets/CashRegister.png')} />
            </View>
            <SubHeaderText>Vad vill du göra?</SubHeaderText>
            <View style={styles.menuItemsContainer}>
                    <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Category')}>
                        <SubHeaderText>Spela</SubHeaderText>
                        <Icon name="play" size={45} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('ComingSoon')}>
                        <SubHeaderText>Öva</SubHeaderText>
                        <Icon name="graduation-cap" size={45} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('ComingSoon')}>
                        <SubHeaderText>Min profil</SubHeaderText>
                        <Icon name="user-alt" size={45} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('ComingSoon')}>
                        <SubHeaderText>Resultat</SubHeaderText>
                        <Icon name="award" size={45} color="white" />
                    </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'space-between' }}>
                <Button title="Debug" onPress={() => navigation.navigate('Debug')} />
                <Icon name="sign-out-alt" size={40} color="white" onPress={() => handleSignOut()} />
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    menuItemsContainer: {
        flex: 2,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    menuItem: {
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 5,
        padding: 10,
        margin: 10,
        width: '40%',
        alignItems: 'center',
    },
});

export default HomeScreen;
