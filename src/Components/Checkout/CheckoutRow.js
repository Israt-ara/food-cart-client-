import { Link } from 'react-router-dom';
import './Checkout.css'

const CheckoutRow = ({ shop, handleDelete }) => {
    const { _id, serviceId, price, category, serviceName, thumbnail } = shop;

    return (

        <tr className='w-full'>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle btn-outline">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded-lg w-12 h-12">
                            <img src={thumbnail} alt='' />
                        </div>
                    </div>
                    <div className='text-left'>
                        <div className="font-bold">{serviceName}</div>
                        <span><small>{category}</small></span>
                    </div>
                </div>
            </td>
            <td>
                <span className="font-bold">${price}</span>
            </td>
            <td>
                <h1>{serviceId}</h1>
            </td>
            <th>
                <Link to={`/foods/${serviceId}`}>
                    <button className="checkout-bg py-1 px-3 rounded-lg bg-sky-600 hover:bg-sky-700 text-white">Details</button>
                </Link>
            </th>
        </tr>
    );
};

export default CheckoutRow;