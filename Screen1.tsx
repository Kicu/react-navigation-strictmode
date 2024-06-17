import * as React from 'react';
import {Button, Text, View} from "react-native";

export default function Screen1({navigation}) {
    const onButtonPress = (screenName) => {
        navigation.navigate(screenName);
    }

    return (
        <View style={[{flex: 1}]}>
            <Text>I'm Screen 1</Text>
            <Text>Navigation:</Text>
            <Button title={"Go to Screen 2"} onPress={() => onButtonPress('Screen2')} />
            <Button title={"Go to Screen 3"} onPress={() => onButtonPress('Screen3')} />
        </View>
    );
}