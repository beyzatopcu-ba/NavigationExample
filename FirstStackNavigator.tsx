import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './Screens/LoginScreen';
import HomeScreen from './Screens/HomeScreen';
import DetailScreen from './Screens/DetailScreen';

export type FirstStackParamList = {
    Home: {
        username: string,
    };
    Login: undefined;
    Detail: {
        title: string,
    }
};

const HeaderRight = (props) => {
    // console.log(props);
    return (
        <TouchableOpacity>
            <Text>+</Text>
        </TouchableOpacity>
    )
}

const Stack = createStackNavigator<FirstStackParamList>();

const FirstStackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen 
                name='Login'
                component={LoginScreen}
                options={{
                    headerTitle: 'Giriş Yap',
                    headerStyle: styles.header,
                    headerTitleStyle: styles.headerTitle,
                    headerRight: HeaderRight,
                    
                }}
                />
            <Stack.Screen 
                name='Home'
                component={HomeScreen}
                options={{
                    headerTitle: 'Anasayfa'
                }}
            />
            <Stack.Screen
                name='Detail'
                component={DetailScreen}
            />
        </Stack.Navigator>
    )
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'lightblue',
        borderBottomColor: 'rgb(100,100,100)',
        borderBottomWidth: 1,
    },
    headerTitle: {
        fontSize: 20,
    },
});

export default FirstStackNavigator;
