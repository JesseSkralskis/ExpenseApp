import moment from 'moment';

export const filters = {
    text: 'this is a test',
    sortBy: 'date',
    startDate: moment(0),
    endDate: moment(0).add(3, 'days')
}

export const filters2 = {
         text: "this is the second test",
         sortBy: "amount",
         startDate: moment(0),
         endDate: moment(0).add(3, 'days')
       };