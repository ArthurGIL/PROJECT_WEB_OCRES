// API : https://ipgeolocation.io/documentation/astronomy-api.html
import React, { Component } from 'react';
import Frame from '../../design/Frame.js';


// Url API 
const API_URL3 = "https://api.ipgeolocation.io/astronomy?apiKey=140b3179a9ed496b917681c7cfd1a1af&location=Paris";

class ApiGeo_Sun extends Component {
    state = {
        post: {}
    }

    componentDidMount() {
        fetch(API_URL3).then((response) => {
            response = response.json();
            response.then((result) => {
                this.setState({post: result});
            })
        })
    }

    render() {
        return (
            <Frame src='/pictures/sun3.png' text='Lever et Coucher de Soleil à Paris' content1={"Lever de Soleil : " + this.state.post.sunrise} content2={"Coucher de Soleil : " + this.state.post.sunset} label='Ipgeolocation Astronomy' path='/dashboard'/>
        );
    }
}

export default ApiGeo_Sun;


