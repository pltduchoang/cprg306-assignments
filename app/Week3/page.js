import Link from "next/link";
import ItemList from "./item-list";

export default function Page() {
    return (
    <main className="flex flex-col items-center w-full bg-emerald-100">
        <div className="bg-emerald-600 text-white p-4 my-4 rounded-lg text-center w-60 hover:bg-emerald-400 hover:underline">
          <Link href="/">Home</Link>
        </div>
        <h1 className=" bg-green-500 text-white flex justify-center p-4 m-4 rounded-md border-black-600 w-60 items-center">My Shopping List</h1>
        <br/>
        <ItemList/>
    </main>
    )
}