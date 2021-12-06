// API : https://wheretheiss.at/w/developer
import React, { Component } from 'react';
import Frame from '../../design/Frame.js';

// Url API 
const API_URL1 = "https://api.wheretheiss.at/v1/satellites/25544" ;

class API_issLoc extends Component {
    state = {
        post: {}
    }

    componentDidMount() {
        fetch(API_URL1).then((response) => {
            response = response.json();
            response.then((result) => {
                this.setState({post: result});
            })
        })
    }

    render() {
        return (
            <Frame src='/pictures/7046.jpg' text='Donées ISS en temps réel' content1={"Latitude: " + this.state.post.latitude} content2={"Longitude: " + this.state.post.longitude} label='wheretheiss.at' path='/dashboard'/>
        );
    }
}

export default API_issLoc;
