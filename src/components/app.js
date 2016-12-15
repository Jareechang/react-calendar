import React, { Component } from 'react';

import CalendarView from '../components/calendarList/index';
import NavigationSection from '../components/navigation/index';

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
                    <NavigationSection />
                    <CalendarView />
                </div>
            </div>

        )
    }
}
