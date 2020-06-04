import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, StyleSheet, Image } from 'react-native';
import { Colors } from '../../../constants/Colors';
import * as actions from '../../../store/actions/index';
import { HeaderText, SubHeaderText } from '../../Components/Styled/Text';
import { MenuItem } from '../../Components/Styled/UI';
import LoadingModal from '../../Modals/LoadingModal';

let categoryMenu = null;

const CategoryScreen = ({ navigation }) => {
    const [categoriesFetched, setCategoriesFetched] = useState(false);

    const categories = useSelector((state) => state.categories.categories);
    const loading = useSelector((state) => state.categories.loading);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!categoriesFetched) {
            dispatch(actions.getCategories());
        };
        return () => {
            dispatch(actions.cleanUpCategory())
            dispatch(actions.cleanUpItems());
            console.log('cleaned up cats and items')
        }
    }, [categoriesFetched]);

    useEffect(() => {
        if (categories) {
            console.log('useEffect create list')
            categoryMenu = createCategoryMenu(categories);
            setCategoriesFetched(true);
            dispatch(actions.cleanUpCategory())
        } 
    }, [categories, categoriesFetched]);

    const createCategoryMenu = (cats) => cats.map((category) => (
        <View style={styles.menuItem} key={category.id} >
            <SubHeaderText>{category.name}</SubHeaderText>
            <MenuItem
                width="90%"
                height="60%"
                onPress={() => navigation.navigate('Competition', { category })}
            >
                <Image style={styles.menuItemImg} source={{ uri: category.url }} />
            </MenuItem>
        </View>
    ));

    return (
        <View style={styles.screen}>
            <View style={styles.top}>
                <HeaderText>Välj en kategori</HeaderText>
            </View>
            <View style={styles.menu}>
                {categoryMenu}
               <LoadingModal visible={loading} />
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
    menu: {
        flex: 2,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    menuItem: {
        width: '40%',
        height: '40%',
        margin: 2,
        borderWidth: 3,
        borderRadius: 5,
        borderColor: 'white',
        alignItems: 'center',
    },
    menuItemImg: {
        width: '100%',
        height: '100%',
    },
});

export default CategoryScreen;
