import React from 'react';
import {View} from 'react-native';
import {customStyles} from '../layoutStyle';
// react native elements
import { Button, ThemeProvider, Text } from 'react-native-elements';

const Home = ( props ) => {
    return(
        <View style={[customStyles.container, customStyles.hundredHundred, customStyles.flexColumnCenterCenter]} >
            <Text h1>
                home screen!
            </Text>
        </View>
        
    )
}

export default Home