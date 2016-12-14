import React, { Component } from 'react';

import CalendarListDay from '../components/calendarList/days';

/* App style imports */
require('../../styles/application.scss'); 

export default class App extends Component {
    constructor (props) {
        super(props);
    }
    render () {
        return (
            <div>
               <p className="para"> starter!</p>
                <CalendarListDay />
            </div>

        )
    }
}
