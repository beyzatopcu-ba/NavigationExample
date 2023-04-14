import { createStackNavigator } from '@react-navigation/stack';
import FirstTabNavigator from './FirstTabNavigator';
import ProfileScreen from './Screens/ProfileScreen';

const MainStack = createStackNavigator();

const MainStackNavigator = () => {
    return (
        <MainStack.Navigator>
            <MainStack.Screen 
                name='Tabs'
                component={FirstTabNavigator}
                options={{
                    headerShown: false,
                }} />
            <MainStack.Screen 
                name='UserProfile'
                component={ProfileScreen}/>
        </MainStack.Navigator>
    );
};

export default MainStackNavigator;
