//can only have one resolve it either is resolved or rejected
//also resolve can only have one argument, if more than one is needed use an oblect
const promise = new Promise((res, rej) => {
    setTimeout(() => {
        // res({
        //     name: 'jesse',
        //     age: 56
        // });

        rej('something went wrong');
    }, 1000)
});
console.log('before');
//then gives us access to the resolved promise

//when the promise completes go ahead and run this function
//not going to just sit and wait for the promise
//already registered the callback
// so javascript moves on and fires the 'after call' and after the 5
//secondes when the promise is completed then the promise data is fired

//when dealing with reject we need to catch it to be able to have options with the error 
//you can also pass in as the second argument to then and it will serve as the catch

promise.then((data) => {
    console.log('1',data);
}, (error)=> console.log('error', error))
    // .catch((error) => {
    
    // console.log('error:', error);
    // }
    // );

 
console.log('after');