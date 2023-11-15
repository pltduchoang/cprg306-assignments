"use client";
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    const handleLogin = async () => {
        await gitHubSignIn();
    };

    const handleLogout = async () => {
        await firebaseSignOut();
    }

    return (
        <main className="flex flex-col items-center w-full bg-emerald-100 min-h-screen">
            <h1 className="text-2xl text-green-500 bg-green-300 flex justify-center p-4 m-4 rounded-md border-black-600 w-60 items-center">Shopping List App</h1>
            {!user && 
                <button onClick={handleLogin} className="bg-emerald-600 text-white p-4 my-4 rounded-lg text-center w-60 hover:bg-emerald-400 hover:underline">
                    Sign In with GitHub
                </button>  
            }
            {user && 
                <div className="bg-green-500 rounded-xl p-8 text-white flex flex-col">
                    <p >Welcome, {user.displayName} ({user.email})</p>
                    <div className="container space-x-2">
                        <Link href="/week10/shopping-list" className="bg-emerald-600 text-white p-5 my-4 rounded-lg text-center hover:bg-emerald-400 hover:underline w-1/2">Shopping</Link>
                        <button onClick={handleLogout} className="bg-emerald-600 text-white p-3 my-4 rounded-lg text-center hover:bg-emerald-400 hover:underline w-1/2 h-16">Sign Out</button>
                    </div>
                </div>
            }
        </main>
    );
}
