import React from 'react';

const NavigationSection = (props) => {
    return (
        <div className="clearfix navigation-section">
            <p className="pull-right">
                Next
                <span className="glyphicon glyphicon-chevron-right navigate-next"></span>
            </p>
            <p className="pull-left">
                <span className="glyphicon glyphicon-chevron-left navigate-previous"></span>
                Previous
            </p>
        </div>
    )
}

export default NavigationSection;
