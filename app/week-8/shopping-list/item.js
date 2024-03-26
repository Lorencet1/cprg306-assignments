export default function Item({item, onSelect}) {
    return(
        <div className="p-6 m-2 border border-red-500 rounded-lg bg-stone-700 w-auto"
            onClick={() => onSelect(item)}>
            <h2 className = "text-2xl font-bold text-justified text-yellow-300">{item.name}</h2>
            <p className = "text-xl text-white">Buy {item.quantity} in {item.category}</p>
        </div>
    );
}

