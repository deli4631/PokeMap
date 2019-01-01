import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {Header, Left, Button, Icon, Body, Title, Right, Fab} from 'native-base';
import {MapView} from 'expo';
import Meteor, {createContainer} from 'react-native-meteor';
class PokeMap extends React.Component{
    render(){
        return(
            <View>
                <Text>Poke Map</Text>
            </View>
        )
    }
}

export default PokeMap;