const DateTracker = (function(eventMiddleWare) {

    let _currentDate = new Date();

    let _eventMiddleWare = eventMiddleWare || {};

    function currentDate() {
        if (!_currentDate) return null;

        return _currentDate.toString();
    }

    function _resetToNextYear () {
        _currentDate.setYear(_currentDate.getFullYear() + 1);
        _currentDate.setMonth(1);
    }

    function _resetToLastYear () {
        _currentDate.setYear(_currentDate.getFullYear() - 1);
        _currentDate.setMonth(11, 31);
    }

    function increment() {
        const NOVEMBER = 11; // offset from date

        if (_currentDate.getMonth() == NOVEMBER) {
            _resetToNextYear();
        } else {
            _currentDate.setMonth(_currentDate.getMonth() + 1);
        }

        _eventMiddleWare.publish('INCREMENT_DATE', _currentDate);
    }

    function decrement() {
        const JANUARY = 1; // offset from date

        if (_currentDate.getMonth() == JANUARY) {
            _resetToLastYear();
        } else {
            _currentDate.setMonth(_currentDate.getMonth() - 1);
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
