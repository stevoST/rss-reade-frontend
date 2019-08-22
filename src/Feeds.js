import React, {Component} from 'react';
import axios from 'axios';
import Moment from 'react-moment';
import 'moment-timezone';
import {API_BASE_URL} from "./config";

class Feeds extends Component {
    state = {
        articles: []
    }

    componentWillMount() {
        axios.get(API_BASE_URL + 'articles').then((response) => {
            this.setState({
                articles: response.data
            })
        });
    }

    render() {
        const articles = this.state.articles.map((article) => {

            return (
                <div className="jumbotron mt-5" key={article.id}>
                    <a href={article.link}><h4>{article.title}</h4></a>
                    {article.description}
                    <br />
                    <b><Moment>{article.test}</Moment></b>
                </div>

            )
        });

        return (
            <div className="App">

                <div className="container">
                    <div className="row">
                        <div className="col"></div>
                        <div className="col-8">{articles}</div>
                        <div className="col"></div>
                    </div>

                </div>
            </div>
        )
    }
}


export default Feeds;

