import React from 'react';

import { Route, Link } from 'react-router-dom'


const HomePage = (props) => {
   return (
    <div className="order-pizza">
    <h1>  
        <Link id ="order-pizza"to="/pizza"><button href="/pizza"> Order Pizza </button></Link>
            <Route path="/pizza" ></Route>
    </h1>
        </div>
   )
    
}

export default HomePage;