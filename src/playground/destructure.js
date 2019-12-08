const person = {
    name: 'Andrew',
    age: 26,
    location: {
        city: 'Philidalphia',
        temp: 95
    }
}

//for non nested bit set = to the object variable

const { name, age } = person; 
console.log(`${name}`);

//if nested set the it = to the nested key:

const { city, temp } = person.location;

//can also rename what you pull out by using :
// then cal the changed name from then on

const { city: hood , temp: tempature } = person.location;

//can also set up default variables

const { city = 'compton', temp = 85 } = person.location;

//can put them together as well

const { city:hood = 'compton', temp } = person.location;

//Array destructering

const address = ['445 summit rd', 'Philidalphia', 'Pennsylvania', '19147'];

//instead of matching up destructering an array does it by array position;

const [street, city, state, zip] = address;

//dont have to use aall positions you can use commas and leave out the variable names
//this example only makes a variable for state
const [, , state];

//can also set defaults

const [,,state='New York']

console.log(`you are in ${city} ${state}.`);
//challenge
const item = ['coffee', '2.00', '2.50', '2.75']

const [item, small, medium, large] = item;

console.log(`A medium ${item} costs ${medium}`);


