import React, { useEffect, useState } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzas, setPizzas] = useState([])
  const [selectedPizza, setSelectedPizza] = useState(null)

  function handleFormInputChange(property, value) {
    setSelectedPizza(formerSelectedPizza => ({ ...formerSelectedPizza, [property]: value }))
  }

  function handleEditPizza(updatedPizza) {
    // create array with pizza object replaced with updated pizza object
    const updatedPizzas = pizzas.map(pizza => {
      if (pizza.id === updatedPizza.id) {
        return updatedPizza
      }
      return pizza
    })
    // update state with the updated pizza array
    setPizzas(updatedPizzas)
  }

  useEffect(() => {
    fetch(`http://localhost:3001/pizzas`)
      .then(r => r.json())
      .then(pizzasArray => {
        setPizzas(pizzasArray)
        // setSelectedPizza(pizzasArray[6])
      })
  }, [])


  return (
    <>
      <Header />
      <PizzaForm selectedPizza={selectedPizza} onInputChange={handleFormInputChange} onSubmit={handleEditPizza} />
      <PizzaList pizzas={pizzas} onSelectPizza={setSelectedPizza} />
    </>
  );
}

export default App;
