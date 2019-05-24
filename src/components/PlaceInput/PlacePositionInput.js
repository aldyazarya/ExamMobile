import React, {Component} from 'react'
import {View, TextInput, Button, StyleSheet} from 'react-native'

import DefaultInput from '../../components/UI/DefaultInput/DefaultInput'

class PlacePositionInput extends Component{

    placePositionChangedHandler = (val) => {
        this.setState({placePosition: val})
    }

    render(){
        return(
        
                
                <DefaultInput
                    placeholder='Position'
                    value = {this.props.placePosition}
                    onChangeText = {this.props.onChangeText}
                />
            
        )
    }
}

export default PlacePositionInput;