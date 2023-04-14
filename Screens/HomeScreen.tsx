import { StackScreenProps } from '@react-navigation/stack';
import { View, Text } from 'react-native';
import { FirstStackParamList } from '../FirstStackNavigator';
import { TouchableOpacity } from 'react-native-gesture-handler';

const HomeScreen = (props: StackScreenProps<FirstStackParamList, 'Home'>) => {

    console.log(props.route.params.username);
    const username = props.route.params.username;

    const _onPress_Item = (itemName: string) => {
        props.navigation.navigate('Detail', {
            title: itemName,
        });
    }

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Anasayfa</Text>
            <Text>{'Kullanıcı: ' + username}</Text>
            <TouchableOpacity onPress={() => _onPress_Item('Bilgisayar')}>
                <Text>Bilgisayar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => _onPress_Item('Tablet')}>
                <Text>Tablet</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HomeScreen;
