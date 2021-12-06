// API : https://wheretheiss.at/w/developer
import React, { Component } from 'react';
import Frame from '../../design/Frame.js';

// Url API 
const API_URL2 = "https://api.nasa.gov/planetary/apod?api_key=I9zujY3IIuLDhoyOpvh5K5PDXayBLskqhHS5klFi";


class Api_Picture extends Component {
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
            <Frame src={this.state.post.hdurl} text="L'image du Jour" content1={"Titre : " + this.state.post.title} label='NASA' path='/dashboard'/>
        );
    }
}

export default Api_Picture;
