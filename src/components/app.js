import React, { Component } from 'react';

/* App style imports */
require('../../styles/application.scss'); 

export default class App extends Component {

    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div className="row">
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
};
