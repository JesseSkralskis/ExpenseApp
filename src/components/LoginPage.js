import React from 'react'

import { connect } from 'react-redux';
import {startLogin} from '../actions/auth'

//destructure the props to get our dispatch
export const LoginPage = ({ startLogin }) => (
         <div className="box-layout">
           <div className="box-layout__box">
             <h1 className="box-layout__title ">Expensify</h1>
             <p>time to take care of your expenses</p>
             <button className="buttons" onClick={startLogin}>Login to Google</button>
           </div>
         </div>
       );

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
        
});

export default connect(undefined, mapDispatchToProps)(LoginPage);



    
