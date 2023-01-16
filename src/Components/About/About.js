import React from 'react';
import image from '../../assets/logo/foodshop3.webp'

const About = () => {
    return (
        <div className='text-black w-[95%] mx-auto mt-[85px]'>

            <div class="py-16 bg-white">
                <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                    <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                        <div class="md:5/12 lg:w-5/12">
                            <img src={image} alt="image" loading="lazy" width="" height="" />
                        </div>
                        <div class="md:7/12 lg:w-6/12">
                            <h2 class="text-2xl text-gray-900 font-bold md:text-4xl">FOOD CART</h2>
                            <p class="mt-6 text-gray-600"> Food cart is a mobile kitchen set up on the street to prepare and sell street food to passers-by. Food carts are often found in cities worldwide selling food of every kind.

                                Food carts come in two basic styles. One allows the vendor to sit or stand inside and serve food through a window. In the other, the vendor stands next to the cart, while all the room in the cart is used for storage and to house the cooking machinery, usually a grilling surface. The cart style is determined principally by the type of food.</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;