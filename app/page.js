
import Link from 'next/link'
import StudentInfo from './StudentInfo/StudentInfo';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen p-24 items-center bg-green-800">
      <div>
        <div>
          <h1 className="text-center text-white bg-emerald-400 rounded-md p-4">CPRG-306 assignments</h1>
        </div>
        <br/>
        <div className="bg-slate-400 rounded-xl p-8">
          <StudentInfo/>
        </div>
        <div className="bg-slate-100 p-4 my-4 rounded-lg text-center">
          <Link href="/Week2">To Week 2 Page</Link>
        </div>
        <div className="bg-slate-100 p-4 my-4 rounded-lg text-center">
          <Link href="/Week3">To Week 3 Page</Link>
        </div>
      </div>
      
    </main>
  )
}
