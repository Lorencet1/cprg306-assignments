"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context"



export default function Page(){

    const {user, gitHubSignIn, firebaseSignOut} = useUserAuth();

    async function handleSignIn(){
        try {
            await gitHubSignIn();
        } catch (error) {
            console.log(error);
        }    
    }

    async function handleSignOut(){
        try {
            await firebaseSignOut();
        } catch (error) {
            console.log(error);
        }    
    }

    console.log(user);
    return (
        <main>
            <header>
                <h1>Login Pages</h1>
            </header>
            <section>   
                { user ? (
                    <div>
                        <p>Welcome, {user.displayName} | {user.email}</p>
                        <p>Your user ID is: {user.uid}</p> 
                        <img src={user.photoURL} className="w-8 h-8" />
                        <button
                            className="text-lg m-2 hover:underline" 
                            onClick={handleSignOut}
                        >
                            Sign Out
                        </button>
                        <div>
                            <Link href="/week10/shopping-list">      
                                    Continue to your Shopping List
                            </Link>
                        </div>
                    </div>
                    
                ) : (
                    <button 
                        className="text-lg m-2 hover:underline"
                        onClick={handleSignIn}
                    >
                        Sign In
                    </button>
                ) }
            </section>
        </main>
    )
}