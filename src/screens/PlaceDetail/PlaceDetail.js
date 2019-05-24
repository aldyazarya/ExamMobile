import React, { Component } from 'react'
import {View, Image, Text, Button, StyleSheet} from 'react-native'
import { connect } from 'react-redux'
import {Fire} from '../../firebase/index'
import { deletePlace } from '../../store/actions/index'

class PlaceDetail extends Component {
    placeDeletedHandler = () => {
        this.props.onDeletePlace(this.props.selectedPlace.key)
        this.props.navigator.pop()

        Fire.database().ref(`places/${this.props.selectedPlace.key}`).remove()
        
    }

    render() {
        return(
            <View style={styles.container}>
                <View>
                    <Image
                        style={styles.placeImage}
                        source={this.props.selectedPlace.image}
                    />
                    <Text style={styles.placeName}> Name: {this.props.selectedPlace.value}</Text>
                    <Text style={styles.placeName}> Age: {this.props.selectedPlace.value2}</Text>
                    <Text style={styles.placeName}> Position: {this.props.selectedPlace.value3}</Text>
                </View>
                <Button title='Delete' color='red' onPress={this.placeDeletedHandler}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        padding: 22
    },
    placeImage: {
        width: '100%',
        height: 220
    },
    placeName : {
        fontWeight: 'bold',
        fontSize : 28,
        textAlign :'center'
    },
    button : {
        margin: 10
    }
})

const mapDispatchToProps = dispatch => {
    return {
        onDeletePlace: (key) => dispatch(deletePlace(key))
    }
}

export default connect(null, mapDispatchToProps)(PlaceDetail)