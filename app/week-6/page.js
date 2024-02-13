"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import ItemData from "./items.json";


export default function Page() {

    const [items, setItems] = useState(ItemData);

    const handleAddItem = (event) => {
        setItems([...items, event]);
    }
    return(
        <main>
            
            <h1 className="text-5xl font-semibold text-justified text-justified m-5">
                Shopping List
            </h1>
            <div>
                <NewItem
                    onAddItem={handleAddItem}
                />
            </div>
            <ul>
                <ItemList items={items} />
            </ul>
        </main>
    );
}