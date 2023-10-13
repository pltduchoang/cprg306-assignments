"use client";
import { useEffect, useState } from "react";
import Item from "./item";
import {AnimatePresence, motion} from "framer-motion";

export default function ItemList({itemList, onItemDeleted}) {
    const [sortCriteria, setSortCriteria] = useState('name');

    let workingList = itemList;

    const handleDelete = (name) => {onItemDeleted(name);};

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
            {sortCriteria !== '' && (
                <AnimatePresence>
                    <motion.ul initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.5}} exit={{opacity:0}} className="flex w-full flex-col">
                    {workingList.sort((a, b) => a[sortCriteria].localeCompare(b[sortCriteria])).map((item) => (
                        <motion.li
                            key={item.id}
                            initial={{opacity: 0, x: -50}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.5, x:50}}
                            exit={{opacity:0}} >
                            <Item 
                                key={item.id} 
                                name={item.name} 
                                quantity={item.quantity} 
                                category={item.category}
                                onItemDeleted={handleDelete}/>
                        </motion.li>
                       
                    ))}
                    </motion.ul>
                </AnimatePresence>
            )}
        </main>           
    );
}