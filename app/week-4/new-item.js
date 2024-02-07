"use client";
import { useState } from "react";

export default function NewItem() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");
    
    const categoryLabel = [
        {label: 'Produce', value:'produce'},
        {label: 'Dairy', value:'dairy'},
        {label: 'Bakery', value:'bakery'},
        {label: 'Meat', value:'meat'},
        {label: 'Frozen Foods', value:'frozen foods'},
        {label: 'Canned Goods', value:'canned goods'},
        {label: 'Dry Goods', value:'dry goods'},
        {label: 'Beverages', value:'beverages'},
        {label: 'Snacks', value:'snacks'},
        {label: 'Household', value:'household'},
        {label: 'Others', value:'others'},

    ]

    const handleSubmit = (event) => {
        event.preventDefault();

        const item = {
            name,
            quantity,
            category,
        };
        console.log(item);
        alert(`Name: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);

        setName('');
        setQuantity(1);
        setCategory(''); 
    };
    const handleNameChange = (event) => {
        setName(event.target.value);
    }
    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    }
    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    }
    return (
    <main className="flex justify-center w-full">
        <form onSubmit={handleSubmit} className="p-2 m-4 bg-slate-900 text-black max-w-sm w-full">
            <div className="mb-2">
                <input 
                    type="name"
                    required
                    placeholder="Item name"
                    onChange={handleNameChange}
                    value={name}
                    className="w-full mt-1 border-2 text-black border-gray-300 p-2 rounded-lg font-sans"
                />      
            </div>
            <div className="flex justify-between">
                <input
                    type="number"
                    required
                    min="1"
                    max="99"
                    value={quantity}
                    onChange={handleQuantityChange}
                    className="w-20 ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
                />
                <select 
                    required
                    value={category} 
                    onChange={handleCategoryChange}
                    className="ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
                    >
                   {categoryLabel.map((category) => (
                    <option key = {category.value} value = {category.value}>
                        {category.label}
                    </option>
                   ))}
                </select>
            </div>  
            <button
                type="submit"
                className="w-full mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                >
                Add new item
            </button>


        </form>
    </main>);
}