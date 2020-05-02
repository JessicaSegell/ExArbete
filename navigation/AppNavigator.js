import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../src/Screens/Home/HomeScreen';
import CompetitionScreen from '../src/Screens/Competition/CompetitionScreen';

const Stack = createStackNavigator();

function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                />
                <Stack.Screen
                    name="Competition"
                    component={CompetitionScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;
