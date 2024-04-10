"use client";

import { useState } from "react";

export default function NewItem({onAddItem}) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newItem ={
      name,
      quantity,
      category,
    }
    console.log(newItem);

    onAddItem(newItem);

    //alert(`Added item: ${newItem.name}, quantity: ${newItem.quantity}, category: ${newItem.category}`);

    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const qtyChangeHandler = (event) => {
    setQuantity(event.target.value);
  };

  const categoryChangeHandler = (event) => {
    setCategory(event.target.value);
  };

  return (
    <main className="flex justify-center mt-5">
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-md">
        <form onSubmit={handleSubmit}>
          <div className="mb-1">
            <input
              className="text-black w-full mt-1 border-2 border-gray-700 p-2 rounded-lg"
              placeholder="Item Name"
              type="text"
              required
              value={name}
              onChange={nameChangeHandler}
            ></input>
          </div>
          <div className="flex justify-between">
            <label className="mt-3">
              <span className="text-zinc-100">Quantity:</span>
              <input
                className="text-black mt-1 p-1 block w-full rounded-md bg-gray-100 focus:bg-white"
                type="number"
                value={quantity}
                onChange={qtyChangeHandler}
                required
                min={1}
                max={99}
              ></input>
            </label>
            <label className="mt-3">
              <span className="text-zinc-100">Category:</span>
              <select
                className="text-black mt-1 p-1 block w-full rounded-md bg-gray-100 focus:bg-white"
                value={category}
                onChange={categoryChangeHandler}
              >
                <option disabled selected>
                  Category
                </option>
                <option value="produce">Produce</option>
                <option value="dairy">Dairy</option>
                <option value="bakery">Bakery</option>
                <option value="meat">Meat</option>
                <option value="frozen foods">Frozen Foods</option>
                <option value="canned goods">Canned Goods</option>
                <option value="dry goods">Dry Goods</option>
                <option value="beverages">Beverages</option>
                <option value="snacks">Snacks</option>
                <option value="household">Household</option>
                <option value="other">Other</option>
              </select>
            </label>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 mt-4 bg-sky-600 hover:bg-sky-500 rounded-md text-white"
          >
            +
          </button>
        </form>
      </div>
    </main>
  );
}
