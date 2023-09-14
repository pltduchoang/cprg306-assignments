import Link from "next/link";
import StudentInfo from "../StudentInfo/StudentInfo";

export default function Page() {
    return (
    <main>
      <Link href="/">Home</Link>
      <h1>My Shopping List</h1>
      <br/>

      <StudentInfo/>
    </main>
    )
}
