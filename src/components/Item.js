import React, { useState } from "react";

function Item({ name, category }) {


  let [isAdded, setCard] = useState(false);
  const ItemClass = isAdded ? "in-cart" : ""
  return (
    <li className={ItemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={() => setCard(!isAdded)} className="add">{isAdded ? "Remove From" : "Add to"} Cart</button>
    </li>
  );
}

export default Item;
