export default function Item({name, quantity, category})
{
    return (
        <li className=" bg-green-500 text-white flex justify-center p-4 m-4 rounded-md border-black-600 w-12/12 items-center">
            <div className="flex flex-col w-10/12">
                <p className="text-left">Name: {name}</p>
                <p className="text-left">Quantity: {quantity}</p>
                <p className="text-left">Category: {category}</p>
            </div>
        </li>
    )
}