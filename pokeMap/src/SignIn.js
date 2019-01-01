import React from 'react';
import {View, Text, Image, Dimensions} from 'react-native';

var myBackground = require('../assets/landing.jpg');
var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;

class SignIn extends React.Component{
    render(){
        return(
            <View style={{flex: 1}}>
                <Image source={myBackground} style={styles.backgroundImage}>
                </Image>                
            </View>
        )
    }
}

const styles = {
    backgroundImage: {
        flex: 1, // cover entire screen
        resizeMode: 'cover', // take care of mixup with height/width matching
        width: width,
        height: height,
    }
}

export default SignIn;