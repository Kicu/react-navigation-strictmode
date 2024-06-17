import {StrictMode} from "react";
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Screen1 from "./Screen1"
import Screen2 from "./Screen2"
import Screen3 from "./Screen3"

const linking = {
    config: {
        screens: {
            Screen1: 'screen1',
            Screen2: 'screen2',
            Screen3: 'screen3',
        },
    },
};

const Stack = createStackNavigator();

const USE_STRICT_MODE = true;

function App() {
    const Wrapper = USE_STRICT_MODE ? StrictMode : ({children}: {children: ReactElement}) => children;

    return (
        <Wrapper>
            <NavigationContainer
                linking={linking}
            >
                <Stack.Navigator>
                    <Stack.Screen name="Screen1" component={Screen1} />
                    <Stack.Screen name="Screen2" component={Screen2} />
                    <Stack.Screen name="Screen3" component={Screen3} />
                </Stack.Navigator>
            </NavigationContainer>
        </Wrapper>
    );
}

export default App;