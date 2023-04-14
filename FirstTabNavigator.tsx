import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FirstStackNavigator from './FirstStackNavigator';
import ProfileScreen from './Screens/ProfileScreen';

const Tabs = createBottomTabNavigator();

const FirstTabNavigator = () => {
    return (
        <Tabs.Navigator screenOptions={{
                headerShown: false,
        }}>
            <Tabs.Screen 
                name='Main'
                component={FirstStackNavigator} />
            <Tabs.Screen 
                name='Profil'
                component={ProfileScreen}
                options={{
                    headerShown: true,
                }} />
        </Tabs.Navigator>
    )
}

export default FirstTabNavigator;