import React from "react";

function Pizza({ pizzaObj, onSelectPizza }) {
  const { topping, size, vegetarian } = pizzaObj

  function handleEditBtnClick() {
    console.log('Edit me!')
    onSelectPizza(pizzaObj)
  }

  return (
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? "yes" : "no"}</td>
      <td>
        <button type="button" className="btn btn-primary" onClick={handleEditBtnClick}>
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
