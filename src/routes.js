import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import CalendarDetails from './components/calendarDetails/index';
import CalendarView from './components/calendarList/index';
import NavigationSection from './components/navigation/index';

const Home = () => {
    return (
        <div>
            <NavigationSection />
            <CalendarView />
        </div>
    );
};

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="details/:dateString" component={CalendarDetails} />
    </Route>
);
