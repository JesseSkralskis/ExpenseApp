import React from "react";

import {  Switch, BrowserRouter, Route } from "react-router-dom";
import '../styles/base.scss'
import Header from '../components/Header'
import AddExpensePage from '../components/AddExpensePage'
import DashBoard from '../components/DashBoard'
import Edit from "../components/Edit";
import Help from "../components/Help";
import NotFoundPage from '../components/NotFoundPage.js';



const AppRouter = () => (

    
    <BrowserRouter>
    {/* if more than on route must wrap with a div */}
    <div>
      <Header />
      {/* switch allows us to say if a route has no path match to print the
      component */}
      <Switch>
        <Route exact={true} path="/" component={DashBoard} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" component={Edit} />
        <Route path="/help" component={Help} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>

);
    

 









export default AppRouter;