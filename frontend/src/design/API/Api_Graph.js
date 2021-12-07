// API : https://wheretheiss.at/w/developer
import React, { Component } from 'react';
import Frame from '../Frame.js';

// Url API 
const API_URL1 = "https://api.wheretheiss.at/v1/satellites/25544" ;

class Api_Graph extends Component {
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
            <Frame src='/pictures/iss.jpg' text='Donées ISS en temps réel' content1={"Long : " + this.state.post.longitude + ", Lat : " + this.state.post.latitude} content2={"Vélocité : " + this.state.post.velocity + " km/h"} label='WhereTheIss.at' path='/dashboard'/>
        );
    }
}

export default Api_Graph;
