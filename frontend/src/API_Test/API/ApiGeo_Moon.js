// API : https://ipgeolocation.io/documentation/astronomy-api.html
import React, { Component } from 'react';
import Frame from '../../design/Frame.js';


// Url API 
const API_URL3 = "https://api.ipgeolocation.io/astronomy?apiKey=140b3179a9ed496b917681c7cfd1a1af&location=Paris";

class ApiGeo_Moon extends Component {
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
            <Frame src='/pictures/moon3.jpg' text='Lever et Coucher de Lune à Paris' content1={"Lever de Lune : " + this.state.post.moonrise} content2={"Coucher de Lune : " + this.state.post.moonset} label='Ipgeolocation Astronomy' path='/dashboard'/>
        );
    }
}

export default ApiGeo_Moon;


