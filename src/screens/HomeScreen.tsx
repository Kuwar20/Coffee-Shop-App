import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { useStore } from '../store/store';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { ScreenContainer } from 'react-native-screens';
import { COLORS } from '../theme/theme';

const getCategoriesFormData = (data: any) => {
    let temp: any = {};
    for (let i = 0; i < data.length; i++) {
        if (temp[data[i].name] === undefined) {
            temp[data[i].name] = 1;
        } else {
            temp[data[i].name]++;
        }
    }
    let categories = Object.keys(temp);
    categories.unshift('All');
    return categories;
};
const getCoffeeList = (category: string, data: any) => {
    if (category === 'All') {
        return data;
    } else {
        let coffeelist = data.filter((item: any) => item.name === category);
        return coffeelist;
    }
};

const HomeScreen = () => {
    const CoffeeList = useStore((state: any) => state.CoffeeList);
    const BeanList = useStore((state: any) => state.BeanList);
    const [categories, setCategories] = useState(
        getCategoriesFormData(CoffeeList),
    );
    const [searchText, setSearchText] = useState(undefined);
    const [categoryIndex, setCategoryIndex] = useState({
        index: 0,
        category: categories[0],
    });
    const [sortedCoffee, setSortedCoffee] = useState(
        getCoffeeList(categoryIndex.category, CoffeeList),
    );

    const tabBarHeight = useBottomTabBarHeight();

    return (
        <View style={styles.ScreenContainer}>
            <StatusBar backgroundColor={COLORS.primaryBlackHex} />
        </View>
    );
};

const styles = StyleSheet.create({ ScreenContainer: { flex: 1, backgroundColor: COLORS.primaryBlackHex }, });

export default HomeScreen;
