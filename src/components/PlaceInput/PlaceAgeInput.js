import React, {Component} from 'react'
import {View, TextInput, Button, StyleSheet} from 'react-native'

import DefaultInput from '../../components/UI/DefaultInput/DefaultInput'


class PlaceAgeInput extends Component {
    placeAgeChangedHandler = (val) => {
        this.setState({placeAge: val})
    }

    render() {
        return (
            <DefaultInput
                    placeholder='Age'
                    value = {this.props.placeAge}
                    onChangeText = {this.props.onChangeText}
                />
        )
    }

}
export default PlaceAgeInput