import React from 'react';
import _ from 'lodash';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import CalendarDetails from './components/calendarDetails/index';
import CalendarView from './components/calendarList/index';
import NavigationSection from './components/navigation/index';

const EventMiddleWare = (props) => {
    let events = {};
    /* public methods */
    let publicMethods = {}

    publicMethods.publish = function(message, data) {
        let action = events[message] || null;
        if (!action) return;

        action(data);
    }

    publicMethods.subscribe = function(message, fn) {
        events[message] = fn;
    }

    publicMethods.reducer = function() {
    }

    /* Attach interface onto child components */
    const childrenWithProps = React.Children.map(props.children,
        (child) => React.cloneElement(child, { event: publicMethods })
    );

    return (<div>{childrenWithProps}</div>);
};

const Home = () => {
    return (
        <EventMiddleWare>
            <NavigationSection />
            <CalendarView />
        </EventMiddleWare>
    );
};

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="details/:dateString" component={CalendarDetails} />
    </Route>
);
