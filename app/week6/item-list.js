"use client";
import { useEffect, useState } from "react";
import Item from "./item";

export default function ItemList({itemList, onItemDeleted}) {
    const [sortCriteria, setSortCriteria] = useState('name');

    let workingList = itemList;

    const handleDelete = (item) => {onItemDeleted(item);};
    return(
        <main>
            <div className="flex flex-row w-full p-1">
                <span className="mx-1">
                    <p>Sort by:</p>
                </span>
                <button
                    className={`mx-1 text-green-500 ${sortCriteria === 'name' ? 'bg-green-700 hover:bg-green-200' : 'bg-green-300 hover:bg-emerald-400'} rounded-md p-0.5 hover:underline hover:text-white`}
                    onClick={() => sortCriteria === 'name' ? setSortCriteria('') : setSortCriteria('name')}
                >
                    <p>Name</p>
                </button>
                <button
                    className={`mx-1 text-green-500 ${sortCriteria === 'category' ? 'bg-green-700 hover:bg-green-200' : 'bg-green-300 hover:bg-emerald-400'} rounded-md p-0.5 hover:bg-emerald-400 hover:underline hover:text-white`}
                    onClick={() => sortCriteria ==='category'? setSortCriteria('') : setSortCriteria('category')}
                >
                    <p>Category</p>
                </button>
                <span className="mx-1 text-green-500 bg-green-300 rounded-md p-0.5 hover:bg-emerald-400 hover:underline hover:text-white">
                    <p>Grouped Category</p>
                </span>
            </div>
            {sortCriteria !== '' &&
                <ul>
                {workingList.sort((a, b) => a[sortCriteria].localeCompare(b[sortCriteria])).map((item) => (
                    <Item 
                        key={item.id} 
                        name={item.name} 
                        quantity={item.quantity} 
                        category={item.category}
                        onItemDeleted={handleDelete}/>
                ))}
            </ul>}
        </main>
    );
}