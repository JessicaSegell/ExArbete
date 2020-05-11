import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, TouchableOpacity, Image, StyleSheet, Button } from 'react-native';
import * as actions from '../../../store/actions/index';
import store from '../../../store/store';

let categoryList = null;

const DebugScreen = ({ navigation }) => {
    const [categoriesFetched, setCategoriesFetched] = useState(false);
    const [itemsFetched, setItemsFetched] = useState(false);

    //console.log(store.getState());

    const categories = useSelector((state) => state.categories.categories);
    const catsLoading = useSelector((state) => state.categories.loading);
    const items = useSelector((state) => state.items.items);
    const dispatch = useDispatch();
    
    const createCategoryList = (cats) => cats.map((category) => (
       // { console.log('create list function', category.name) }
        <TouchableOpacity key={category.id} onPress={() => navigation.navigate('CompDebug', { category })}>
            <View style={styles.categoryBtn}>
                <Text>{category.name}</Text>
            </View>
        </TouchableOpacity>
    ));

    useEffect(() => {
        if (!categoriesFetched) {
            dispatch(actions.getCategories());
        };
        return () => {
            dispatch(actions.cleanUpCategory())
            dispatch(actions.cleanUpItems());
            console.log('cleaned up cats and items')
        }
       // console.log(categories, categoriesFetched);
    }, [categoriesFetched]);

    useEffect(() => {
        if (categories) {
            console.log('useEffect create list')
            categoryList = createCategoryList(categories);
            setCategoriesFetched(true);
            dispatch(actions.cleanUpCategory())
        } /* return () => {
            //setCategoriesFetched(false)
            console.log('cleaned up category from list useeffect')
        } */
    }, [categories, categoriesFetched]);

    return (
        <View>
            <Text>Hello Debug!</Text>
            <View style={styles.buttons}>
                <Button title="Get Categories" /* onPress={fetchCategories} */ />
                <Button title="Get categoryItems" /* onPress={fetchItems} */ />
            </View>
            <View style={styles.list}>
                {categoryList}
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '80%',
        marginTop: 20,
        justifyContent: 'space-around',
    },
    list: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '80%',
        marginTop: 20,
        justifyContent: 'space-around',
        backgroundColor: 'pink',
    },
    categoryBtn: {
        width: 50,
        height: 50,
        backgroundColor: 'pink',
    },
})

export default DebugScreen
