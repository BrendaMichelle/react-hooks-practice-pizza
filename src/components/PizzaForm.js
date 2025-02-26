import React from "react";

function PizzaForm({ selectedPizzaData, onInputChange, onEditSubmit }) {
  // If the selectedPizza is null (aka it doesn't have a value), 
  // then don't render the form
  if (!selectedPizzaData) {
    return null
  }

  function handleInputChange(event) {
    onInputChange(event.target.name, event.target.value)
  }

  function handleRadioInputChange(event) {
    const isVegetarian = event.target.value === 'Vegetarian'
    onInputChange(event.target.name, isVegetarian)
  }

  function handleEditSubmit(event) {
    event.preventDefault()

    fetch(`http://localhost:3001/pizzas/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(selectedPizzaData)
    })
      .then(response => response.json())
      .then(updatedPizzaObject => {
        onEditSubmit(updatedPizzaObject)
      })
  }


  const { id, topping, size, vegetarian } = selectedPizzaData

  return (
    <form onSubmit={handleEditSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            value={topping}
            onChange={handleInputChange}
          />
        </div>
        <div className="col">
          <select className="form-control" name="size" value={size} onChange={handleInputChange}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              checked={vegetarian}
              onChange={handleRadioInputChange}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              checked={!vegetarian}
              onChange={handleRadioInputChange}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
