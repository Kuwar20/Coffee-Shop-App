import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CoffeeCard = ({ name }) => {
    return (
        <View>
            <Text>{name}</Text>
        </View>
    )
}


const styles = StyleSheet.create({})
export default CoffeeCard