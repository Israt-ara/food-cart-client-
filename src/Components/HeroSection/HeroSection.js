import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../../assets/logo/ff2.avif';
import image2 from '../../assets/logo/ff1.avif';
// import image1 from '../../../Assets/images/img4.jpg';

import './HeroSection'


const HeroSection = () => {
    return (

        <div className="mt-2">

            <div className="bg-white pb-6 sm:pb-8 lg:pb-12 p-8">

                <section className="max-w-screen-2xl px-4 md:px-8 mx-auto">
                    <div className="flex flex-wrap justify-between mb-8 md:mb-16">
                        <div className="w-full lg:w-1/3 flex flex-col justify-center lg:pt-48 lg:pb-24 mb-6 sm:mb-12 lg:mb-0">
                            <h1 className="text-black-800 text-4xl sm:text-5xl md:text-6xl font-serif mb-4 md:mb-8">FOOD CART</h1>

                            <p className="max-w-md text-gray-500 xl:text-lg leading-relaxed font-serif">This is one of the best online resturant. Here you can order all types of Food. For Order You Can Call Us or Text Us</p>
                        </div>

                        <div className="w-full lg:w-2/3 flex mb-12 md:mb-16">
                            <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden relative z-10 top-12 md:top-16 left-12 md:left-16 -ml-12 lg:ml-0">
                                <img src={image1} loading="lazy" alt="" className="w-full h-full object-cover object-center" />
                            </div>

                            <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
                                <img src={image2} loading="lazy" alt="" className="w-full h-full object-cover object-center" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );



    // <div className=''>
    //     <div className="hero w-full min-h-screen" style={{ backgroundImage: `url("https://thumbs.dreamstime.com/z/street-food-22460926.jpg")` }}>
    //         <div className="hero-overlay bg-opacity-60"></div>
    //         <div className="hero-content text-center text-neutral-content">
    //             <div className="max-w-md">
    //                 <h1 className="home-text mb-5 md:text-6xl text-white font-bold">FOOD CART</h1>
    //                 <p className="home-para mb-5">This is one of the best online resturant. Here you can order all types of Food. For Order You Can Call Us or Text Us</p>
    //                 <Link to='/foods'>
    //                     <button className="btn food-btn">Order</button>
    //                 </Link>
    //             </div>
    //         </div>
    //     </div>
    // </div>

};

export default HeroSection;