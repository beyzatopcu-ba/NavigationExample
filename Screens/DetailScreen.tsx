import { StackScreenProps } from '@react-navigation/stack';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { FirstStackParamList } from '../FirstStackNavigator';
import React, { useCallback, useEffect } from 'react';

const DetailScreen = (props: StackScreenProps<FirstStackParamList, 'Detail'>) => {

    const itemTitle = props.route.params.title;

    const _onPress_HeaderRight = useCallback(() => {
        Alert.alert('Sağ butona dokundun.')
    }, []);

    useEffect(() => {
        props.navigation.setOptions({
            headerTitle: itemTitle,
            headerRight: () => {
                if (itemTitle === 'Tablet') {
                    return (
                        <TouchableOpacity onPress={_onPress_HeaderRight}>
                            <Text>Alert</Text>
                        </TouchableOpacity>
                    )
                }
                return null;
            }
        })
    }, [props.navigation.setOptions, itemTitle, _onPress_HeaderRight]);

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Detay Ekranı</Text>
        </View>
    )
}

export default DetailScreen;
