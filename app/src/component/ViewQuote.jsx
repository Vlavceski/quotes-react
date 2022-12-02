import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

class ViewQuote extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [],
            DataisLoaded: false
        };
    }
    componentDidMount() {
        fetch("https://type.fit/api/quotes")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }
    render() {
        const { DataisLoaded } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Loading... </h1> </div>;
        return (
            <div class="row">
                <NavLink className="btn btn-info" to='/random-quote'>Random Quote</NavLink>
                {
                    this.state.items.map((item) => (
                        <div class="col-sm-3">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">{item.author}</h5>
                                    <p class="card-text">{item.text}</p>
                                </div>
                            </div>
                        </div>
                    ))}

            </div>

        );
    }
}
export default ViewQuote