export default function Item({item}) {
    return(
        <div className="p-3 m-1 border border-white bg-gradient-to-r from-cyan-800 to-cyan-600 w-96">
            <h2 className = " font-bold text-justified">{item.name}</h2>
            <p className = " text-white">Buy {item.quantity} in {item.category}</p>
        </div>
    );
}