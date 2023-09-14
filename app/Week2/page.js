import Link from "next/link";
import EventList from "./event-list";
export default function Page() {
    return (
        <main>
      <h1>Week 2</h1>
      <Link href="/">Home</Link>
      <EventList/>
    </main>
    )
}
