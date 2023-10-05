import HomeButton from "../homebutton";
import AddItem from "./additem";
export default function Page()
{


    return(
    <main className="flex flex-col items-center w-full min-h-screen bg-emerald-100">
        <HomeButton/>
        <h1 className=" text-green-500 text-xl bg-green-300 flex justify-center p-4 m-4 rounded-md border-black-600 w-60 items-center">Add Shopping Item</h1>
        <AddItem/>
    </main>);
} 