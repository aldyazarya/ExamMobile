import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux'

import PlaceList from '../../components/PlaceList/PlaceList'
import {Fire} from '../../firebase/index'
import {createData} from '../../store/actions/index'

class FindPlaceScreen extends Component {

    componentDidMount(){
        var places = Fire.database().ref('places')
        places.once('value', this.props.onCreateData, (err) => {console.log(err);})
    }

    constructor(props) {
        super(props)
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }

    onNavigatorEvent = event => {
        if (event.type === 'NavBarButtonPress'){
            if (event.id === 'sideDrawerToggle'){
                this.props.navigator.toggleDrawer({
                    side: 'left'
                })
            }
        }
    }

    itemSelectedHandler = (key) => {
        // selPlace = {value, key, image}
        const selPlace = this.props.places.find(place => {
            return place.key == key
        })
        this.props.navigator.push({
            screen: 'jc8reactnative.PlaceDetailScreen',
            title: selPlace.value,
            passProps: {
                selectedPlace: selPlace
            }
        })
    }

    

    render () {
        return (
            <View>
                <PlaceList 
                    places ={this.props.places}
                    onItemSelected={this.itemSelectedHandler}
                />
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        places: state.places.places
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         onCreateData: items => dispatch(createData(items))
//     }
// }

export default connect(mapStateToProps, {createData})(FindPlaceScreen);