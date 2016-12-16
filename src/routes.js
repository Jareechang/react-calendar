import React from 'react';
import _ from 'lodash';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import CalendarDetails from './components/calendarDetails/index';
import CalendarView from './components/calendarList/index';
import NavigationSection from './components/navigation/index';

const EventMiddleWare = (props) => {
    /* public methods */
    let publicMethods = {
        date: new Date(),
        incrementMonth() {
            return this.date.setMonth(this.date.getMonth() + 1);
        },
        decrementMonth() {
            return this.date.setMonth(this.date.getMonth() - 1);
        }
    }

    publicMethods.publish = function(message, type = 1) {
        console.log(message);
        console.log(type);
    }

    publicMethods.subscribe = function() {
    }

    publicMethods.reducer = function() {
    }

    /* Attach interface onto child components */
    const childrenWithProps = React.Children.map(props.children,
        (child) => React.cloneElement(child, { event: publicMethods})
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
