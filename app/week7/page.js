"use client";
import { useState } from "react";

import HomeButton from "../homebutton";
import AddItem from "./additem";
import ItemList from "./item-list";
import itemData from "./items.json";
import MealIdeas from "./meal-ideas";


export default function Page() {

    const [itemList, setItemList] = useState(itemData);
    const [ingredient, setIngredient] = useState('');
    
    const handleIngredient = (name) => {
        setIngredient(name);
    };
    const handelDelete = (name) => {
        setItemList(itemList.filter((item) => item.name !== name));
        alert(`Deleted ${name} from the list`);
    };

    const handleItemCreated = (item) => {
        setItemList([...itemList, item]);
        alert(`Added ${item.name} to the list`);
    };


    return (
    <main className="flex flex-col items-center w-full bg-emerald-100 min-h-screen">
        <HomeButton/>
        <h1 className="text-2xl text-green-500 bg-green-300 flex justify-center p-4 m-4 rounded-md border-black-600 w-60 items-center">My Shopping List</h1>
        <AddItem onItemCreated={handleItemCreated}/>
        <div className="flex flex-row">
        <ItemList 
            itemList={itemList}
            onItemDeleted={handelDelete}
            sendIngredient={handleIngredient}/>
        <MealIdeas
            ingredient={ingredient}/>
        </div>
        
    </main>
    );
}
    
