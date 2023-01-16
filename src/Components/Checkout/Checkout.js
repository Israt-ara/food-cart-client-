import React, { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import CheckoutRow from './CheckoutRow';
import Swal from 'sweetalert2'
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import './Checkout.css'

const Checkout = () => {
    const { user, logout } = useContext(AuthContext)
    const [shops, setShops] = useState([])

    useEffect(() => {
        fetch(`https://food-shop-server.vercel.app/shops?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('user-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logout()
                }
                return res.json()
            })
            .then(data => {
                setShops(data)
            })
    }, [user?.email, logout])


    const handleDelete = (id) => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger mx-3'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, Delete',
            cancelButtonText: 'No, Cancel',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://food-shop-server.vercel.app/shops/${id}`, {
                    method: 'DELETE',
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('user-token')}`
                    }
                })

                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            const remaining = shops.filter(shop => shop._id !== id)
                            setShops(remaining)
                        }
                    })
            }
        })
    }
    const handleClearShops = () => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success fw-bold',
                cancelButton: 'btn btn-danger mx-3 fw-bold'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, Clear Shops',
            cancelButtonText: 'No, Cancel',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {

                fetch('https://food-shop-server.vercel.app/shops/', {
                    method: 'DELETE',
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('user-token')}`
                    }
                })

                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        if (data.acknowledged) {
                            fetch('https://food-shop-server.vercel.app/shops/')
                                .then(res => res.json())
                                .then(data => setShops(data))
                        }
                    })
            }
        })
    }
    return (
        <div className='w-[96%] mx-auto overflow-x-auto my-12 rounded-lg'>
            <div className="overflow-x-auto">
                <table className="table w-full text-center">

                    <thead>
                        <tr>
                            <th>
                                <h1 className='font-bold'>{shops.length} Orders</h1>
                            </th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Order Id</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            shops.map(shop => <CheckoutRow
                                key={shop._id}
                                shop={shop}
                                handleDelete={handleDelete}
                            ></CheckoutRow>)
                        }
                    </tbody>

                </table>
            </div>
            {
                shops.length === 0 ?
                    <h1 className='no-items text-center font-bold text-blue-600 text-2xl'>No Items</h1>
                    :
                    <div className='flex justify-end my-6'>
                        <button onClick={() => handleClearShops()} className='checkout-bg flex items-center btn btn-warning'>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" className="text-white w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"></path>
                                </svg>
                            </span>
                            <span className="text-white">Clear</span>
                        </button>
                    </div>
            }


            {
                shops.length > 0 &&
                <form className='bg-gray-300 p-8 my-8 rounded-lg'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <input type="text" name='firstName' placeholder="Your First Name" className="input input-bordered w-full" required />
                        <input type="text" name='lastName' placeholder="Your Last Name" className="input input-bordered w-full" required />
                        <input type="text" name='phone' placeholder="Your Phone Number" className="input input-bordered w-full" required />
                        <input type="email" name='email' readOnly placeholder="Your Email" className="input input-bordered w-full" required />

                    </div>
                    <textarea className='input input-bordered textaria mt-6 p-4 textarea-bordered min-h-24 max-h-32 w-full' name="message" placeholder='Your Message' id="" cols="30" rows="10"></textarea>

                    <input type="submit" value="Order Confirm" className='checkout-bg btn bg-orange-600 hover:bg-orange-700 border-0 mt-6 w-full' />
                </form>
            }
            <hr className='border-6 border-blue-800 mt-12' />
        </div>
    );
};

export default Checkout;
