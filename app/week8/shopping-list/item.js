export default function Item({name, quantity, category, onItemDeleted, sendIngredient})
{
    const getMainIngredient = (name) => {
        const part = name.split(',');
        const partFirst = part[0].split(' ');
        return partFirst[0];
    }
    

    const handleIngredientClick = () => {sendIngredient(getMainIngredient(name));};
    const handleClick = () => {onItemDeleted(name);};
    return (
        <main className=" bg-green-500 text-white flex justify-center p-4 m-4 rounded-md border-black-600 items-center transform transition-transform hover:scale-105">
            <div 
            className="flex flex-col w-10/12 items-center">
                <p className="text-left">Name: {name}</p>
                <p className="text-left">Quantity: {quantity}</p>
                <p className="text-left">Category: {category}</p>
                <div className="flex flex-row justify-between">
                    <button 
                    className="bg-green-600 text-white m-4 p-4 my-4 rounded-lg text-center w-60 hover:bg-green-700 hover:underline"
                    onClick={handleClick}>Delete</button>
                    <button
                    className="bg-green-600 text-white m-4 p-4 my-4 rounded-lg text-center w-60 hover:bg-green-700 hover:underline"
                    onClick={handleIngredientClick}>Search Meals</button>
                </div>
            </div>
        </main>
    )
}