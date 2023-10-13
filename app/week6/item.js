export default function Item({name, quantity, category, onItemDeleted})
{

    const handleClick = () => {onItemDeleted(name);};
    return (
        <main className=" bg-green-500 text-white flex justify-center p-4 m-4 rounded-md border-black-600 w-12/12 items-center transform transition-transform hover:scale-105">
            <div className="flex flex-col w-10/12">
                <p className="text-left">Name: {name}</p>
                <p className="text-left">Quantity: {quantity}</p>
                <p className="text-left">Category: {category}</p>
                <button 
                className="bg-green-600 text-white p-4 my-4 rounded-lg text-center w-60 hover:bg-green-700 hover:underline"
                onClick={handleClick}>Delete</button>
            </div>
        </main>
    )
}