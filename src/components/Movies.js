import React, { Component, Fragment } from "react";
import { Link, useParams } from "react-router-dom";

export default class Movies extends Component {

    state = { movies: [] };

    componentDidMount() {
        this.setState({
            movies: [
                { id: 1, title: "Mask", runtime: 142 },
                { id: 2, title: "Mask-2", runtime: 175 },
                { id: 3, title: "Mask-3", runtime: 134 },
                { id: 3, title: "Mask-4", runtime: 136 }
            ]
        })
    }
    render() {
        return (
            <Fragment>
                <h2>Choose movie</h2>
                <ul>
                    {this.state.movies.map((m) => (
                        <li key={m.id}>
                            <Link to={`/movies/${m.id}`}>{m.title}</Link>
                        </li>
                    ))}
                </ul>
            </Fragment>
        );
    }
}