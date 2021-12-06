import React from 'react';
import axios from 'axios';

class ApiRest extends React.Component {
    state = {
        name: '',
        dateNaissance: '',
        mission: '',
        dateMission: '',
        nationalite: '',
        employeur: '',
        posts: []
    };

    componentDidMount = () => {
        this.getBlogPost();
    };


    getBlogPost = () => {
        axios.get('/users')
        .then((response) => {
            const data = response.data;
            this.setState({ posts: data });
            console.log('Data has been received!!');
        })
        .catch(() => {
            alert('Error retrieving data!!!');
        });
    }

    handleChange = ({ target }) => {
        const { name, value } = target;
        this.setState({ [name]: value });
    };


    submit = (event) => {
        event.preventDefault();

        const payload = {
            name: this.state.name,
            dateNaissance: this.state.dateNaissance,
            mission: this.state.mission,
            dateMission: this.state.dateMission,
            nationalite: this.state.nationalite,
            employeur: this.state.employeur
        };

        axios({
            url: '/users',
            method: 'POST',
            data: payload
        })
        .then(() => {
            console.log('Data has been sent to the server');
            this.resetUserInputs();
            this.getBlogPost();
        })
        .catch(() => {
            console.log('Internal server error');
        });;
    };

    resetUserInputs = () => {
        this.setState({
            name: '',
            dateNaissance: '',
            mission: '',
            dateMission: '',
            nationalite: '',
            employeur: ''
        });
    };

    displayBlogPost = (posts) => {
        if (!posts.length) return null;
        return posts.map((post, index) => (
            <div key={index} className="blog-post__display">
                <h3>{post.name}</h3>
                <p>{post.dateNaissance}</p>
                <p>{post.mission}</p>
                <p>{post.dateMission}</p>
                <p>{post.nationalite}</p>
                <p>{post.employeur}</p>
            </div>
        ));
    };

    render() {
        console.log('State: ', this.state);
        return(
            <div className="app">
                <h2>Gérer l'Api</h2>
                <form onSubmit={this.submit}>
                    <div className="form-input">
                        Nom : <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                    </div>
                    <div className="form-input">
                        Date de Naissance : <input type="text" name="dateNaissance" value={this.state.dateNaissance} onChange={this.handleChange}/>
                    </div>
                    <div className="form-input">
                        Mission : <input type="text" name="mission" value={this.state.mission} onChange={this.handleChange}/>
                    </div>
                    <div className="form-input">
                        Date de Mission : <input type="text" name="dateMission" value={this.state.dateMission} onChange={this.handleChange}/>
                    </div>
                    <div className="form-input">
                        Nationalite : <input type="text" name="nationalite" value={this.state.nationalite} onChange={this.handleChange}/>
                    </div>
                    <div className="form-input">
                        Employeur : <input type="text" name="employeur" value={this.state.employeur} onChange={this.handleChange}/>
                    </div>

                    <button>Submit</button>
                </form>

                <div className="blog-">
                    {this.displayBlogPost(this.state.posts)}
                </div>
            </div>
        );
    }
}

export default ApiRest;
