
import Link from 'next/link'
import StudentInfo from './StudentInfo/StudentInfo';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen p-24 items-center bg-emerald-100">
      <div>
        <div>
          <h1 className="text-center text-green-500 bg-green-300 rounded-md p-4">CPRG-306 assignments</h1>
        </div>
        <br/>
        <div className="bg-green-500 rounded-xl p-8 text-white">
          <StudentInfo/>
        </div>
        <div className="bg-emerald-600 text-white p-4 my-4 rounded-lg text-center hover:bg-emerald-400 hover:underline">
          <Link href="/Week2">To Week 2 Page</Link>
        </div>
        <div className="bg-emerald-600 text-white p-4 my-4 rounded-lg text-center hover:bg-emerald-400 hover:underline">
          <Link href="/Week3">To Week 3 Page</Link>
        </div>
      </div>
      
    </main>
  )
}
