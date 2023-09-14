
import Link from 'next/link'
import StudentInfo from './StudentInfo/StudentInfo';

export default function Home() {
  return (
    <main>
      <h1>CPRG-306 assignments</h1>
      <br/>
      <StudentInfo/>

      <Link href="/Week2">To Week 2 Page</Link>
    </main>
  )
}
