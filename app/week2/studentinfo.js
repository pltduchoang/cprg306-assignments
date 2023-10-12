import Link from "next/link"
export default function StudentInfo() {
    return (
        <main className="bg-green-500 rounded-xl p-8 text-white">
            <h1>Student Info</h1>
            <p>Name: Anh Duc Hoang / Duc Hoang</p>
            <p>Course Section: CPRG 306 B</p>
            <Link href="https://github.com/pltduchoang/cprg306-assignments.git">My Github</Link>
        </main>);
}