"use client";
import { useState } from "react";


import AddItem from "./additem";
import ItemList from "./item-list";
import itemData from "./items.json";
import MealIdeas from "./meal-ideas";
import HomeButton from "@/app/homebutton";
import { useUnmountEffect } from "framer-motion";
import { useUserAuth } from "../_utils/auth-context";


export default function Page() {

    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
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

    const handleLogin = async () => {
        await gitHubSignIn();
    };

    const handleLogout = async () => {
        await firebaseSignOut();
    }

    return (
        <>
        {user &&
            <main className="flex flex-col items-center w-full bg-emerald-100 min-h-screen">
                <HomeButton/>
                <div className="bg-green-500 rounded-xl p-8 text-white flex flex-col">
                    <p >Welcome, {user.displayName} ({user.email})</p>
                    <div className="container space-x-2">
                        <button onClick={handleLogout} className="bg-emerald-600 text-white p-3 my-4 rounded-lg text-center hover:bg-emerald-400 hover:underline w-full h-16">Sign Out</button>
                    </div>
                </div>
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
            
            </main>}
        {!user && 
            <main className="flex flex-col items-center w-full bg-emerald-100 min-h-screen">
                <HomeButton/>
                <h1 className="text-2xl text-green-500 bg-green-300 flex justify-center p-4 m-4 rounded-md border-black-600 w-60 items-center">Please Log In first</h1>
                <button onClick={handleLogin} className="bg-emerald-600 text-white p-4 my-4 rounded-lg text-center w-60 hover:bg-emerald-400 hover:underline">
                    Sign In with GitHub
                </button> 
            </main>}
        </>
    );
}
    
