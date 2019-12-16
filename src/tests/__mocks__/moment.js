//create a mock librarty or moment that will give us a non changinig time for moment
//what this does is force moment to have a default value so all tests will pass

const moment = require.requireActual('moment');

export default (timestamp = 0) => {
    return moment(timestamp);
}

