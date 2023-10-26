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
        <>
            <h1>Shopping List App</h1>
            {!user && 
                <div>
                    <button onClick={handleLogin}>Sign In with Github</button>
                    
                </div>
            }
            {user && 
                <div>
                    <p>Welcome, {user.displayName} ({user.email})</p>
                    <Link href="/week8/shopping-list">Shopping</Link>
                    <button onClick={handleLogout}>Sign Out</button>
                </div>
            }
        </>
    );
}
