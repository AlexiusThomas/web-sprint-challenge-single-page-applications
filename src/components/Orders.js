import { Route } from "react-router-dom";
export default function Orders(props) {
  const { orders } = props;

  if (!orders) {
    return <p>No new orders</p>;
  }

  return orders.map((order, index) => {
    return (
      <div className="order-container" key="index">
        <h2>New Order</h2>
        <div className="order-wrapper">
          <p>Name: {order["name-input"]}</p>
          <p> Size: {order["size-dropdown"]}</p>
          <p>
            Toppings:{" "}
            {order.toppings.length > 0 ? order.toppings.join(", ") : "None"}
          </p>
          <p>
            Special instructions:
            {order["special-text"].length > 0 ? order["special-text"] : "None"}
          </p>
        </div>
      </div>
    );
  });
}