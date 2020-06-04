import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../src/Screens/Home/HomeScreen';
import CompetitionScreen from '../src/Screens/Competition/CompetitionScreen';
import DebugScreen from '../src/Screens/Debug/DebugScreen';
import CompDebugScreen from '../src/Screens/Debug/CompDebugScreen';
import CategoryScreen from '../src/Screens/Category/CategoryScreen';
import SignInScreen from '../src/Screens/Auth/SignInScreen';
import CreateAccountScreen from '../src/Screens/Auth/CreateAccountScreen';
import AuthStartScreen from '../src/Screens/Auth/AuthStartScreen';
import * as actions from '../store/actions/index';
import { useSelector } from 'react-redux';
import ResultsScreen from '../src/Screens/Results/ResultsScreen';
import MyPageScreen from '../src/Screens/MyPage/MyPageScreen';
import ComingSoonScreen from '../src/Screens/ComingSoon/ComingSoonScreen';

const Stack = createStackNavigator();
const AuthStack = createStackNavigator();

const Home = (
    <Stack.Navigator>
        <Stack.Screen
            name="Home"
            component={HomeScreen}
        />
        <Stack.Screen
            name="Competition"
            component={CompetitionScreen}
        />
        <Stack.Screen
            name="Debug"
            component={DebugScreen}
        />
        <Stack.Screen
            name="CompDebug"
            component={CompDebugScreen}
        />
        <Stack.Screen
            name="Category"
            component={CategoryScreen}
        />
        <Stack.Screen
            name="Results"
            component={ResultsScreen}
        />
        <Stack.Screen
            name="MyPage"
            component={MyPageScreen}
        />
        <Stack.Screen
            name="ComingSoon"
            component={ComingSoonScreen}
        />
    </Stack.Navigator>
)

const Auth = (
    <AuthStack.Navigator>
        <AuthStack.Screen
            name="AuthStart"
            component={AuthStartScreen}
        />
        <AuthStack.Screen
            name="SignIn"
            component={SignInScreen}
        />
        <AuthStack.Screen
            name="CreateAccount"
            component={CreateAccountScreen}
        />
    </AuthStack.Navigator>
)

function AppNavigator() {

    const auth = useSelector((state) => state.auth.loggedIn);

    return (

        <NavigationContainer>
            {auth == false ? Auth : Home}
        </NavigationContainer>
    );
}

export default AppNavigator;
