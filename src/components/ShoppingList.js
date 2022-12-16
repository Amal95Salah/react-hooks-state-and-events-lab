import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  let [selectedCategory, setSelectedCategory] = useState("All");

  const handleOnChange = (event) => {
    setSelectedCategory(event.target.value)
  }
  const displayedItem = items.filter((item) => {
    if (selectedCategory === "All") return true
    if (item.category == selectedCategory)
      return true
    else return false;
  });

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleOnChange} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {displayedItem.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
