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
            <div className="bg-green-300 text-green-500 p-4 my-4 rounded-lg w-96">
                <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center">
                    <input 
                    required
                    name="itemName"
                    id="itemName"
                    onChange={handleNameChange}
                    value={name}
                    placeholder="Item Name"
                    className="w-full p-1 rounded-md"></input>
                    <div className="flex flex-row p-1 items-stretch w-max">
                        <input
                        type="number"
                        name="itemQuantity"
                        id="itemQuantity"
                        min="1"
                        max="99"
                        value={quantity}
                        onChange={handleQuantityChange}
                        className="m-2 rounded-md p-1 h-9 flex1"></input>
                        <select
                        name="itemCategory"
                        id="itemCategory"
                        onChange={handleCategoryChange}
                        value={category}
                        placeholder="Category"
                        className="m-2 rounded-md p-1 h-9 flex-1"
                        >
                            {categoryList.map((category, index) => (
                                <option key={index} value={category}>
                                {category}
                                </option>
                            ))}
                        </select>
                    </div>
                    
                    <button type="submit" className="bg-emerald-600 text-white p-4 my-4 w-2/3 rounded-lg text-center hover:bg-emerald-400 hover:underline">Add Item</button>
                </form>
            </div>
        </main>
    );
}