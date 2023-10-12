export default function Item({name, quantity, category})
{
    return (
        <div className=" bg-green-500 text-white flex justify-center p-4 m-4 rounded-md border-black-600 w-12/12 items-center">
            <ul className="flex flex-col w-7/12">
                <li className="text-left">Name: {name}</li>
                <li className="text-left">Quantity: {quantity}</li>
                <li className="text-left">Category: {category}</li>
            </ul>
        </div>
    )
}