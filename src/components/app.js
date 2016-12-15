import React, { Component } from 'react';

import CalendarView from '../components/calendarList/index';

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
                    <CalendarView />
                </div>
            </div>
        )

    }
}
