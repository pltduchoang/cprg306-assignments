import Link from "next/link";
import HomeButton from "../homebutton";
import StudentInfo from "./studentinfo";

export default function Page() {
    return (
    <main className="flex flex-col items-center min-h-screen p-4 bg-emerald-100">
      <HomeButton/>
      <h1 className="text-2xl text-green-500 bg-green-300 flex justify-center p-4 m-4 rounded-md border-black-600 w-60 items-center">My Shopping List</h1>
      <br/>
      <StudentInfo/>
    </main>
    );
}
