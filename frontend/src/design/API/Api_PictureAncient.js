// API : https://wheretheiss.at/w/developer
import React, { Component } from 'react';
import Frame from '../Frame.js';

// Url API 
const API_URL2 = "https://api.nasa.gov/planetary/apod?date=2012-12-01&api_key=I9zujY3IIuLDhoyOpvh5K5PDXayBLskqhHS5klFi";


class Api_PictureAncient extends Component {
    state = {
        post: {}
    }

    componentDidMount() {
        fetch(API_URL2).then((response) => {
            response = response.json();
            response.then((result) => {
                this.setState({post: result});
            })
        })
    }

    render() {
        return (
            <Frame src={this.state.post.url} text="L'image du 1 Décembre 2012" content1={this.state.post.title} label='NASA' path='/dashboard'/>
        );
    }
}

export default Api_PictureAncient;
