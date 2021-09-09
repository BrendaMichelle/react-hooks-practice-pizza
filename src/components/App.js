import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzas, setPizzas] = useState([])
  const [selectedPizza, setSelectedPizza] = useState(null)

  useEffect(() => {
    fetch("http://localhost:3001/pizzas")
      .then(response => response.json())
      .then(setPizzas)
    // .then(pizzasArray => {
    //   setPizzas(pizzasArray)
    // })
  }, [])


  function handleEditInputChange(name, value) {
    setSelectedPizza(previousSelectedPizzaObj => {
      return { ...previousSelectedPizzaObj, [name]: value }
    })
  }

  function handleEditSubmit(updatedPizza) {
    const updatedPizzasArray = pizzas.map(pizza => {

      if (pizza.id === updatedPizza.id) {
        return updatedPizza
      }

      return pizza
    })

    setPizzas(updatedPizzasArray)
  }


  return (
    <>
      <Header />
      <PizzaForm selectedPizzaData={selectedPizza} onInputChange={handleEditInputChange} onEditSubmit={handleEditSubmit}/>
      <PizzaList pizzasArr={pizzas} onSelectPizza={setSelectedPizza} />
    </>
  );
}

export default App;
