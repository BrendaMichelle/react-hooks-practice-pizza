import React from "react";
import Pizza from "./Pizza";

function PizzaList({ pizzasArr, onSelectPizza }) {
  // const pizzasArr = props.pizzasArr
  // const { pizzasArr } = props

  const pizzasComponents = pizzasArr.map(pizza => <Pizza pizzaObject={pizza} key={pizza.id} onSelectPizza={onSelectPizza} />)

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {
          pizzasComponents
        }
      </tbody>
    </table>
  );
}

export default PizzaList;
