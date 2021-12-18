import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import axios from "axios";
import * as yup from "yup";
import PizzaForm from "./components/PizzaForm";
import pizzaSchema from "./components/PizzaSchema";
import Orders from "./components/Orders";

const initialForm = {
  "name-input": "",
  "size-dropdown": null,
  pepperoni: false,
  sausage: false,
  onions: false,
  greenPeppers: false,
  "special-text": "",
};
const initialErrors = {
  name: "",
  size: "",
};
const initialOrders = [];
const initialDisable = true;
{
  /* <img src="/"/> */
}
const App = () => {
  const [formValues, setFormValues] = useState(initialForm);
  const [orders, setOrders] = useState(initialOrders);
  const [disabled, setDisabled] = useState(initialDisable);
  const [formErrors, setFormErrors] = useState(initialErrors);

  const postOrder = (newOrder) => {
    axios
      .post("https://reqres.in/api/orders", newOrder)
      .then((resp) => {
        setOrders([resp.data, ...orders]);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        // setFormValues(initialForm);
      });
  };

  const validate = (name, value) => {
    yup
      .reach(pizzaSchema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
  };

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const formSubmit = () => {
    const newOrder = {
      "name-input": formValues["name-input"].trim(),
      "size-dropdown": formValues["size-dropdown"],
      "special-text": formValues["special-text"],
      toppings: ["pepperoni", "sausage", "onions", "greenPeppers"].filter(
        (topping) => !!formValues[topping]
      ),
    };
    postOrder(newOrder);
  };

  useEffect(() => {
    pizzaSchema.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues]);

  return (
    <div className="app-container">
      <header>
        <Route path="/">
          <Link to="/" style={{ textDecoration: "none" }}>
            <h1 className="h1">Lambda Eats</h1>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <p>Home</p>
          </Link>
        </Route>
      </header>

      <Route exact path="/">
        <Link to={`/pizza`}>
          <button id="order-pizza">Order Now</button>
        </Link>
      </Route>

      <Route path="/pizza">
        <PizzaForm
          disabled={disabled}
          change={inputChange}
          submit={formSubmit}
          values={formValues}
          errors={formErrors}
        />
      </Route>

      {/* <Route path="/orders"> */}
      <Orders orders={orders} />
      {/* </Route> */}
      {/**for some reason my routes for the orders tend to break once in a while, if you encounter the orders not showing up please refresh the server... I'm thinking that the api has a limit and it's blocking new request */}

      {/* <img src='/Pizza.jpg'/> */}
      {/* <img src="./img/Pizza.jpg" /> */}
      {/* <Img /> */}
    </div>
  );
};
export default App;