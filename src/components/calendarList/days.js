import React, { Component } from 'react';


export default class CalendarDays extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div className="calendar-block">
                {this.props.day}
            </div>
        )
    }
}
