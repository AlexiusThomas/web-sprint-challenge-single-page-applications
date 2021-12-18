import React, { useState, useEffect } from 'react'
import HomePage from './components/HomePage.js'
import Form from './components/Form.js'
import PizzaPost from './components/Pizza.js'
import axios from 'axios'
import schema from './validation/schema.js'
import * as yup from 'yup';

import { Route, Link } from 'react-router-dom'
// name: string,
//     size: string,
//     topping1: bool,
//     topping2: bool,
//     special: string,

const initialFormValues = {
    name: '',
    size: '',
    sauce1: false,
    sauce2: false,
    pepperoni: false,
    sausage: false,
    canadianBacon: false,
    onions: false,
    jalapeno: false,
    mushroom: false,
    greenPepper: false,
    extraCheese: false,
    threeCheese: false,
    special: '',
}
const initialFormErrors = {
  name: '',
  size: '',
  sauce: '',
  special: ''
}
const initialDisabled = true;

const App = () => {

const [formValues, setFormValues] =useState([initialFormValues]);
const [formErrors, setFormErrors] = useState(initialFormErrors);
const [confirmation, setConfirmation] = useState(initialFormValues);
const [disabled, setDisabled] = useState(initialDisabled);





const setNewPizza = (newOrder) =>
{
    setConfirmation(newOrder);
    setFormValues(initialFormValues);
};

const validate = (name, value) =>
{
    yup.reach(schema, name)
        .validate(value)
        .then(() => setFormErrors({ ...formErrors, [name]: '' }))
        .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
};


const change = (name, value) =>
{
    validate(name, value);
    setFormValues({
        ...formValues,
        [name]: value
    });
};
 const submit = () =>
    {
        const newOrder = {
            name: formValues.name.trim(),
            size: formValues.size,
            sauce: ['sauce1', 'sauce2'].filter(top => !!formValues[top]),
            special: formValues.special.trim()
        };

        setNewPizza(newOrder);
    };
    useEffect(() =>
    {
      schema.isValid(formValues).then(valid => setDisabled(!valid));
    }, [formValues]);

useEffect(() => {
  axios.get('https://reqres.in/api/orders')
    .then(res => {
     console.log(res.data.data)
     
    }).catch(err => console.error(err));
}, [])


  return (
    <div className="App">
    <header>
      <nav>
      <h1>Lambda Eats</h1>
        <Link to="/">Home Page</Link>
        <Link to="/pizza">Form</Link>
       <Link to="/post">Pizza</Link> 
        </nav>
    </header>
    <Route exact path='/post'>
    <PizzaPost details={confirmation}/>
    </Route>
    <Route id='name-input' path="/pizza">
      <Form change={change} submit={submit} values={formValues} disabled={disabled} errors={formErrors}/>
    </Route>
    <Route exact path="/"> 
      <HomePage />
    </Route>
      
    </div>
  );
};
export default App;