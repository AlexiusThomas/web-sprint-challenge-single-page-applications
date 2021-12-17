import React from 'react';


const PizzaPost = ({details}) => {
    if (!details) {
        return <h3>Loading your order</h3>;
    }
return (
<div className= 'submit'>
<h2>Your order</h2>
            <p>{details.name}'s Order Details</p>
            <p>Pizza Size: {details.size}</p>
            <p>Sauce</p> {details.sauce}
            {
            !!details.toppings && !!details.toppings.length &&
            <div>
                Toppings:
                <ul>
                    {details.toppings.map((item, idx) => <li key={idx}>{item}</li>)}
                </ul>
            </div>
                }
            <p>Special Instructions: {details.special}</p>
     </div>
)
   
}

export default PizzaPost;