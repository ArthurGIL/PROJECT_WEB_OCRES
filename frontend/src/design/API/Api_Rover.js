// API : https://wheretheiss.at/w/developer
import React, { Component } from 'react';
import Frame from '../Frame.js';

// Url API 
const API_URL1 = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=I9zujY3IIuLDhoyOpvh5K5PDXayBLskqhHS5klFi" ;

class Api_Rover extends Component {
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
            <Frame src={this.state.post.img_src} text='Donées du robot Rover en mission sur Mars en temps réel' content1={"Name : " + this.state.post.name + ", Landing Date : " + this.state.post.landing_date} content2={"Status : " + this.state.post.status} label='WhereTheIss.at' path='/dashboard'/>
        );
    }
}

export default Api_Rover;
