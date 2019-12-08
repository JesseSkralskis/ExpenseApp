//higher order component -a component(Hoc) that renders another component (another component)
//used to reuse code
//prop manipulation
//Abstract State


// import React from 'react'


// export default function hoc(props) {
//     return (
//         <div>
//             <h1>Info</h1>
//             <p>thi info is: {props.info}</p>
//         </div>
//     )
// }

// const withAdminWarning = (WrappedComponent) => {
//     return (props) => (
//         <div>
//             <p>this is private info dont share</p>
//             //use spread operators to pass down every key value pair on the object as props
//             <WrappedComponent {...props}/>
//         </div>
//     )
    
// }

// const requireAuth = (WrappedComponent) => (
//     <div>
//         //use turnerary
//         {props.isauthenticated ? (<WrappedComponent {...props}/>) : ( <p>'please log in to view th info</p>)}
        
        

//     </div>
// )

// //because component must be capitalized

// const AdminInfo = withAdminWarning(hoc)

// const AuthInfo = requireAuth(hoc)

// console.log(AdminInfo);

//what passing the props would look like

// <AuthInfo isAuthenticated = {false} info = {'whatever'}/>


  