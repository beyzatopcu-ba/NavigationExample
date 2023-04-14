import { StackScreenProps } from '@react-navigation/stack';
import { View, Text, TouchableOpacity } from 'react-native';
import { FirstStackParamList } from '../FirstStackNavigator';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = (props: StackScreenProps<FirstStackParamList, 'Login'>) => {

    console.log(props);
    const navigation = useNavigation();

    const _onPress_GoToHomeScreen = () => {
        // 1. yöntem
        props.navigation.navigate('Home', {
            username: 'Deneme Kullanıcı',
        });
        // 2. yöntem;
        // navigation.navigate('Home', {
        //     username: 'Deneme'
        // });
    }

    const _onPress_GoToUserProfileScreen = () => {
        // 1. yöntem
        props.navigation.navigate('UserProfile');
        // 2. yöntem;
        // navigation.navigate('Home', {
        //     username: 'Deneme'
        // });
    }

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Giriş Ekranı</Text>
            <TouchableOpacity onPress={_onPress_GoToHomeScreen}>
                <Text>Anasayfaya Git</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={_onPress_GoToUserProfileScreen}>
                <Text>Kullanıcı profiline git Git</Text>
            </TouchableOpacity>
        </View>
    )
}

export default LoginScreen;
