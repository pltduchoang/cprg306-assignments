"use client";
import { useState,useEffect } from "react";
import AddItem from "./additem";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import HomeButton from "@/app/homebutton";
import { useUserAuth } from "../_utils/auth-context";
import { subscribeToShoppingList, addItem, deleteItem } from "../_services/shopping-list-service";


export default function Page() {

    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    const [itemList, setItemList] = useState([]);
    const [ingredient, setIngredient] = useState('');
    
    useEffect(() => {
        if (user) {
          const unsubscribe = subscribeToShoppingList(user, setItemList);
          return () => unsubscribe();
        }
      }, [user]);

    const handleIngredient = (name) => {
        setIngredient(name);
    };
    const handelDelete = async (itemId,userId) => {

        console.log('itemId:', itemId);
        console.log('userId:', userId);
        try {
            if (!user) {
                throw new Error('User not authenticated');
            }
            if (!itemId || !userId) {
                throw new Error('Item is missing required fields');
            }
            await deleteItem(itemId,userId);
            alert('Item deleted');
        } catch (error) {
            console.error('Error in handleItemDeleted:', error);
            throw error;
        }
    };

    const handleItemCreated = async (item, user) => {
        try {
          // Ensure the user is authenticated
          if (!user || !user.uid) {
            throw new Error('User not authenticated');
          }
      
          // Check if the item has required fields
          if (!item || !item.name || !item.quantity || !item.category) {
            throw new Error('Item is missing required fields');
          }
      
          // Create the item object to be added to Firestore
          const newItem = {
            name: item.name,
            quantity: item.quantity,
            category: item.category,
          };

          console.log('newItem:', newItem);
          console.log('user:', user.uid);
      
          // Call the service function to add the item to Firestore
          const itemId = await addItem(item,user); // Pass user and newItem to the addItem service function
          alert('Item added');
          // Return the ID of the added item or the added item details if needed
          return itemId;

        } catch (error) {
          console.error('Error in handleItemCreated:', error);
          // Handle or rethrow the error as needed
          throw error;
        }
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
                    <p >Welcome, {user.uid} ({user.email})</p>
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
    
