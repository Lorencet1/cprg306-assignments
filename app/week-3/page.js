import React from "react";
import ItemList from './item-list';

export default function Page() {
    return (
    <main className="bg-gradient-to-r from-blue-800 via-purple-900 to-indigo-900">
        <h1 className="text-center text-4xl font-extrabold">Shopping List</h1>
        <div>
            <ItemList />
        </div> 
    </main>
    );
};