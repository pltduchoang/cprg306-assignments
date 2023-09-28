"use client";

import { useState } from "react";

export default function AddItem() 
{
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("1");
    const [category, setCategory] = useState("");
    const [itemCreated, setItemCreated] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        const newItem = {
            name,
            quantity,
            category,
        };
        console.log(newItem);
        alert(`Item ${newItem.name} added to shopping list`);

        setItemCreated(true);

        setName("");
        setQuantity("");
        setCategory("");
    };

    const categoryList = ["Produce", "Dairy", "Meat", "Bakery", "Frozen Goods", "Canned Goods", "Dry Goods", "Beverage", "Snack","Household" ,"Other"];

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleQuantityChange = (event) => { 
        setQuantity(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };
    return(
        <main>
            <div>
                <form onSubmit={handleSubmit}>
                    <input 
                    required
                    name="itemName"
                    id="itemName"
                    onChange={handleNameChange}
                    value={name}
                    placeholder="Item Name"
                    className=""></input>
                    <input
                    type="number"
                    name="itemQuantity"
                    id="itemQuantity"
                    min="1"
                    max="99"
                    value={quantity}
                    onChange={handleQuantityChange}
                    className=""></input>
                    <select
                    name="itemCategory"
                    id="itemCategory"
                    onChange={handleCategoryChange}
                    value={category}
                    placeholder="Category"
                    >
                        {categoryList.map((category, index) => (
                            <option key={index} value={category}>
                            {category}
                            </option>
                        ))}
                    </select>
                    <button type="submit">Add Item</button>
                </form>
            </div>
        </main>
    );
}