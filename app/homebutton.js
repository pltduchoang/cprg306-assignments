import Link from 'next/link';
export default function HomeButton() {
    return(      
        <Link href="/">
            <div className="bg-emerald-600 text-white p-4 my-4 rounded-lg text-center w-60 hover:bg-emerald-400 hover:underline">
                Home
            </div>
        </Link>

    );
}