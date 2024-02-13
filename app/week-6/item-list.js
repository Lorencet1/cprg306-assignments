import { useState } from "react";
import Item from "./item";
import ItemData from "./items.json";

export default function ItemList() {
  //map the JSON data to an array
  let itemArray = ItemData.map((item) => ({ ...item }));

  //set up states for sorting and grouped category
  let [sortBy, setSortBy] = useState("name");
  let [groupedCategory, setGroupedCategory] = useState(false)

  //if gorupedCategory is ture that a user clicks grouped category button, the items are listed by category. Or 
  if(groupedCategory) {
    
    // created empty empty object for storing the items sorted by category.
    const groupedItems = {};

    // itemArray.reduce((groupedItems, item) => {
    //   if(groupedItems[item.category] == ) {
    //     groupedItems[item.category] = [];
    //   }
    //   groupedItems[item.category].push(item);
    // });


    itemArray.forEach((item) => {
    if(!groupedItems[item.category]) {
      groupedItems[item.category] = [];
    }
    groupedItems[item.category].push(item);
    });

  for(const category in groupedItems){
    groupedItems[category].sort((a, b) => a.name.localeCompare(b.name));
  }

  itemArray = groupedItems;
} 
else {
  itemArray = itemArray.sort((a, b) => {
    if(isNaN(parseInt(a[sortBy]))){
        let nameA = a[sortBy].toUpperCase();
        let nameB = b[sortBy].toUpperCase();
        
        if(nameA < nameB){
            return -1;
        }
        if(nameA > nameB){
            return 1;
        }
        return 0;
    } else {
        return a[sortBy] - b[sortBy];
    }
  });
}


  return (
    <>
      <div>
        <label>Sort by: </label>
        <button
          className="m-2 p-2 bg-blue-300 text-black rounded-md"
          value="name"
          onClick={(event) => {setSortBy(event.target.value);
          setGroupedCategory(false);}}
        >
          Name
        </button>
        <button className="m-2 p-2 bg-blue-300 text-black rounded-md"
        value="category"
        onClick={(event) => {setSortBy(event.target.value);
        setGroupedCategory(false)}}>
          Category
        </button>
        <button className="m-2 p-2 bg-blue-300 text-black rounded-md"
        value="category"
        onClick={() => setGroupedCategory(true)}
        >
          Grouped Category
        </button>
      </div>

      <section className="grid grid-cols-1 gap-5 p-5">
        {groupedCategory ? Object.keys(itemArray).map((category) => (
          <div key={category}>
            <p className="text-2xl font-bold text-white">{category.toUpperCase()}</p>
            <li>{itemArray[category].map((item) => (<Item key={item.id} item={item} /> ))}</li>
          </div>
        ))
        : itemArray.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </section>
    </>
  );
}