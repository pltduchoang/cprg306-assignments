
import Link from 'next/link'
import StudentInfo from './week2/studentinfo'


export default function Home() {

  const week = ["week2", "week3", "week4", "week5", "week6", "week7", "week8", "week10"]
  return (
    <main className="flex flex-col min-h-screen p-24 items-center bg-emerald-100">
      <div>
        <div>
          <h1 className="text-center text-green-500 bg-green-300 rounded-md p-4 text-2xl">CPRG-306 assignments</h1>
        </div>
        <br/>
        <div className='mb-4'>
          <StudentInfo/>
        </div>
        
        <ul className="flex flex-col items-center">
          {week.map((week) => (
            <li key={week} >
              <Link href={week}>
                <button className='m-6 bg-emerald-600 text-white p-4  rounded-lg text-center w-64 hover:bg-emerald-400 hover:underline'>
                  To {week} Page
                </button>
              </Link>
            </li>
          ))}
        </ul>

        {/* <Link href="/week2">
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

        <Link href="/week6">
          <div className="bg-emerald-600 text-white p-4 my-4 rounded-lg text-center hover:bg-emerald-400 hover:underline">
            To Week 6 Page
          </div>
        </Link> */}

      </div>
      
    </main>
  );
}
