import React from 'react';
import { Link } from 'react-router-dom';
import './FoodCart.css'

const FoodCard = ({ food }) => {
    const { _id, price, strInstructions, strMealThumb, strMeal } = food
    // console.log(food)
    return (
        <div>

            <div className='w-[95%] mx-auto'>
                <div className="card h-full w-full shadow-xl food-card">
                    <figure><img className='h-44 w-full' src={strMealThumb} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title ">
                            {strMeal}

                        </h2>
                        <p className='text-gray-700'>{strInstructions ? strInstructions.slice(0, 120) + '...' : 'No Data Found'}</p>
                        <div className="card-actions justify-between items-center">
                            <h1 className='text-3xl font-bold text-rose-600'>${price}</h1>
                            <Link to={`/foods/${_id}`} className='btn details-btn'>Details</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;