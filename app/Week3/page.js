import Link from "next/link";
import ItemList from "./item-list";

export default function Page() {
    return (
    <main className="flex flex-col items-center">
        <Link href="/">Home</Link>
        <h1>My Shopping List</h1>
        <br/>
        <ItemList/>
    </main>
    )
}