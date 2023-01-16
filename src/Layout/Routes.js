import { createBrowserRouter } from "react-router-dom";
import About from "../Components/About/About";
import Checkout from "../Components/Checkout/Checkout";
import Error from "../Components/Error/Error";
import FoodCard from "../Components/FoodCard/FoodCard";
import FoodDetails from "../Components/FoodDetails/FoodDetails";
import Foods from "../Components/Foods/Foods";
import Home from "../Components/Home/Home";
import Login from "../Components/Profile/Login/Login";
import Profile from "../Components/Profile/Profile/Profile";
import Signup from "../Components/Profile/Signup/Signup";
import PriveteRoute from "../Context/PriveteRoute/PriveteRoute";
import Main from "./Main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                // loader: () => fetch('https://food-shop-server.vercel.app/foods'),
                element: <Home></Home>
            },
            {
                path: '/home',
                // loader: () => fetch('https://food-shop-server.vercel.app/foods'),
                element: <Home></Home>
            },
            {
                path: '/foods',
                loader: async () => {
                    return fetch('https://food-shop-server.vercel.app/foods')
                },
                element: <Foods></Foods>
            },
            { path: '/food', element: <FoodCard></FoodCard> },
            {
                path: '/foods/:id',
                loader: async ({ params }) => {
                    return fetch(`https://food-shop-server.vercel.app/foods/${params.id}`)

                },
                element: <PriveteRoute><FoodDetails></FoodDetails></PriveteRoute>
            },
            {
                path: '/checkout',
                element: <PriveteRoute><Checkout></Checkout></PriveteRoute>
            },
            { path: '/about-us', element: <About></About> },
            { path: '/profile', element: <PriveteRoute><Profile></Profile></PriveteRoute> },
            { path: '/signup', element: <Signup></Signup> },
            { path: '/login', element: <Login></Login> },
            { path: '*', element: <Error></Error> }
        ]
    },

])


export default router;