import React from 'react';
import { Link } from 'react-router-dom';
import Foods from '../Foods/Foods';
import HeroSection from '../HeroSection/HeroSection';
import SpecialOffer from '../SpecialOffer/SpecialOffer';
import Steps from '../Steps/Steps';
import Testimonial from '../Testimonial/Testimonial';
import './Home.css'

const Home = () => {
    // const foods = useLoaderData()
    return (
        <div className=''>
            {/* <div className="hero w-full min-h-screen" style={{ backgroundImage: `url("https://thumbs.dreamstime.com/z/street-food-22460926.jpg")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="home-text mb-5 md:text-6xl text-white font-bold">FOOD CART</h1>
                        <p className="home-para mb-5">This is one of the best online resturant. Here you can order all types of Food. For Order You Can Call Us or Text Us</p>
                        <Link to='/foods'>
                            <button className="btn food-btn">Order</button>
                        </Link>
                    </div>
                </div>
            </div> */}
            <HeroSection></HeroSection>
            <SpecialOffer></SpecialOffer>
            <Foods></Foods>
            <Steps></Steps>

            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;