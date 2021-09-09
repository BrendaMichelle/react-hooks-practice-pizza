import React from "react";
import Pizza from "./Pizza";

function PizzaList({ pizzas, onSelectPizza }) {
  // const pizzas = props.pizzas
  // const { pizzas } = props

  const pizzaComponents = pizzas.map(pizzaObj => <Pizza key={pizzaObj.id} pizzaObj={pizzaObj} onSelectPizza={onSelectPizza} />)


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
        {pizzaComponents}
      </tbody>
    </table>
  );
}

export default PizzaList;
