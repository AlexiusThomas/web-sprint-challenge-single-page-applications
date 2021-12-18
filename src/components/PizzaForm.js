import react from "react";
import { Link } from "react-router-dom";
export default function PizzaForm(props) {
  const { values, submit, change, disabled, errors } = props;

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  const onChange = (evt) => {
    const { name, value, checked, type } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  };

  return (
    <div className="pizzaForm">
      <div className="pizza-wrapper">
        <p>{errors["name-input"]}</p>
        <form id="pizza-form" onSubmit={onSubmit}>
          <label>
            Your Name
            <br />
            <input
              value={values["name-input"]}
              onChange={onChange}
              name="name-input"
              type="text"
              id="name-input"
            />
          </label>
          <label>
            Size
            <br />
            <select
              name="size-dropdown"
              onChange={onChange}
              value={values["size-dropdrown"]}
              id="size-dropdown"
            >
              <option value={null}>- Select a Size -</option>
              <option value="small"> Small </option>
              <option value="medium"> Medium </option>
              <option value="large"> Large </option>
            </select>
          </label>
          <div>
            <h4>Toppings</h4>
            <label>
              <input
                type="checkbox"
                name="pepperoni"
                checked={values.pepperoni}
                onChange={onChange}
              />
              Pepperoni
              <br />
            </label>
            <label>
              <input
                type="checkbox"
                name="sausage"
                checked={values.sausage}
                onChange={onChange}
              />
              Sausage
              <br />
            </label>
            <label>
              <input
                type="checkbox"
                name="onions"
                checked={values.onions}
                onChange={onChange}
              />
              Onions
              <br />
            </label>
            <label>
              <input
                type="checkbox"
                name="greenPeppers"
                checked={values.greenPeppers}
                onChange={onChange}
              />
              Green Peppers
            </label>
          </div>
          <label>
            Special Requests
            <br />
            <input
              value={values["special-text"]}
              onChange={onChange}
              name="special-text"
              type="text"
              id="special-text"
            />
          </label>
          {/* <Link to={`/orders`}> */}
          <button id="order-button" disabled={disabled}>
            Submit Order
          </button>
          {/* </Link> */}
        </form>
      </div>
    </div>
  );
}