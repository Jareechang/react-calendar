import moment from 'moment';

const DateTracker = (function(eventMiddleWare) {

    let _currentDate = moment();

    let _eventMiddleWare = eventMiddleWare || {};

    function currentDate() {
        if (!_currentDate) return null;

        return _currentDate.toString();
    }

    function _resetToNextYear () {
        _currentDate.add(1, 'years');
    }

    function _resetToLastYear () {
        _currentDate.subtract(1, 'years');
    }

    function increment() {
        const NOVEMBER = 11; // offset from date

        _currentDate.add(1, 'months');

        _eventMiddleWare.publish('INCREMENT_DATE', _currentDate);
    }

    function decrement() {
        const JANUARY = 1; // offset from date

        if (_currentDate.month() == JANUARY) {
            _resetToLastYear();
        } else {
            _currentDate.subtract(1, 'months');
        }

        _eventMiddleWare.publish('DECREMENT_DATE', _currentDate);
    }

    return {
        currentDate,
        increment,
        decrement
    }
})

export default DateTracker;
