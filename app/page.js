
import Link from 'next/link'
import StudentInfo from './studentinfo/StudentInfo'

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen p-24 items-center bg-emerald-100">
      <div>
        <div>
          <h1 className="text-center text-green-500 bg-green-300 rounded-md p-4 text-2xl">CPRG-306 assignments</h1>
        </div>
        <br/>
        <div >
          <StudentInfo/>
        </div>
        
        <Link href="/week2">
          <div className="bg-emerald-600 text-white p-4 my-4 rounded-lg text-center hover:bg-emerald-400 hover:underline">
            To Week 2 Page
          </div>
        </Link>

        <Link href="/week3">
          <div className="bg-emerald-600 text-white p-4 my-4 rounded-lg text-center hover:bg-emerald-400 hover:underline">
            To Week 3 Page
          </div>
        </Link>

        <Link href="/week4">
          <div className="bg-emerald-600 text-white p-4 my-4 rounded-lg text-center hover:bg-emerald-400 hover:underline">
            To Week 4 Page
          </div>
        </Link>

        <Link href="/week5">
          <div className="bg-emerald-600 text-white p-4 my-4 rounded-lg text-center hover:bg-emerald-400 hover:underline">
            To Week 5 Page
          </div>
        </Link>

      </div>
      
    </main>
  )
}
