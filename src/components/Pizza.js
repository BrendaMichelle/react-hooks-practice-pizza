import React from "react";

function Pizza({ pizzaObject, onSelectPizza }) {
  return (
    <tr>
      <td>{pizzaObject.topping}</td>
      <td>{pizzaObject.size}</td>
      <td>{pizzaObject.vegetarian ? "yes" : "no"}</td>
      <td>
        <button type="button" className="btn btn-primary" onClick={() => { onSelectPizza(pizzaObject) }}>
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
