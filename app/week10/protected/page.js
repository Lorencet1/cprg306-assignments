"use client";

import { addNewItem, getItemList } from "../_services/shopping-list-service";
import { useUserAuth } from "../_utils/auth-context";



export default function Page(){

    const {user, gitHubSignIn, firebaseSignOut} = useUserAuth();

    if(user){
        const items = getItemList(user.uid);
        console.log(items);
    }

    let newItem = {
        name: 'Onion',
        category: 'produce',
        quantity: 4,
    }

    return (
        <main>
            <header>
                <h1>Protected Page</h1>
            </header>
            <section>
                { user ? (
                    <div>
                    <p>You are longed in! This page is Protected</p>
                    <button onClick={() =>  addNewItem(user.uid, newItem)}>Add Test Item </button>
                    </div>
                ) : (
                    <p>You must be logged in to view this page.</p>
                )}
            </section>
        </main>

    );
}