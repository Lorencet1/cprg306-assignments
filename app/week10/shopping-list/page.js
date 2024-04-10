"use client";

import { useState, useEffect } from "react";
import { addNewItem, getItemList } from "../_services/shopping-list-service";

import ItemList from "./item-list";
import NewItem from "./new-item";

import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";

export default function Page() {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");
  const { user } = useUserAuth();

  useEffect(() => {
    async function loadItems() {
      if (user) {
        const loadItemsResult = await getItemList(user.uid);
        setItems(loadItemsResult);
      }
    }

    loadItems();
  }, [user]);

  const handleAddItem = async (newItem) => {
    const addedItem = await addNewItem(user.uid, newItem);
   setItems(prevItems => [...prevItems, { ...newItem, id: addedItem }]);
  };
  

  const handleItemSelect = (item) => {
    let cleanedItemName;
    if (item.name.includes(",")) {
      cleanedItemName = item.name.split(",")[0].trim();
    } else {
      cleanedItemName = item.name.split(" ")[0].trim();
    }
    setSelectedItemName(cleanedItemName);
  };



  return (
    <main>
      <h1 className="text-5xl font-semibold text-justified text-justified m-5">
        Shopping List
      </h1>
      <div className="flex">
        <div>
          <NewItem onAddItem={handleAddItem} />
        </div>
        <div>
          <ul>
            <ItemList items={items}
            onItemSelect={handleItemSelect} />
          </ul>
        </div>
        <div>
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
