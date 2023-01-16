import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Bars3CenterLeftIcon, XMarkIcon } from '@heroicons/react/24/solid'
import './Navbar.css'
import logo from '../../assets/logo/foodCart.png'
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Navbar = () => {
    const { user, logout, setTheme } = useContext(AuthContext)
    const [shops, setShops] = useState([])
    const [open, setOpen] = useState(false)
    const [profileView, setProfileView] = useState(false)
    const [isHovering, setIsHovering] = useState(false);
    // console.log(profileView)

    const handleLogOut = () => {
        logout()
        setProfileView(!profileView)
    }

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };



    useEffect(() => {
        fetch(`https://food-shop-server.vercel.app/shops`)
            .then(res => res.json())
            .then(data => setShops(data))
    }, [])

    return (
        <nav className="navbar-design py md:w-full">

            <div className='flex justify-between items-center mx-4'>
                <div>
                    <Link to='/' className='block ml-0'>
                        <img className='w-[80px] md:hidden' src={logo} alt="brand logo" />
                    </Link>
                </div>
                <div onClick={() => setOpen(!open)} className="w-10 md:hidden ml-4 text-blue-800">
                    {
                        open ?
                            <XMarkIcon /> : <Bars3CenterLeftIcon />
                    }
                </div>
            </div>
            <div className={`navbar-design flex z-50 flex-col items-start justify-start mt-none md:flex-row md:items-center h-full md:h-fit md:w-full md:flex md:justify-end md:pr-12 absolute md:static duration-500 ease-in  ${open ? 'left-[0px] pl-5 pr-10 pt-3' : '-left-[300px] md:left-0'}`}>
                <Link to='/' className='text-blue-600 font-bold text-2xl md:grow' >
                    <img className='w-[100px] hidden md:block' src={logo} alt="brand logo" />
                </Link>
                <NavLink onClick={() => setOpen(false)} className={({ isActive }) => isActive ? 'active mt-3 md:mt-0 md:hidden' : 'undefined mt-3 md:mt-0 md:hidden'} to='/profile'>
                    <button className='btn btn-xs btn-primary  py-0'>PROFILE</button>
                </NavLink>
                <NavLink onClick={() => setOpen(false)} className={({ isActive }) => isActive ? 'active mt-3 md:mt-0' : 'undefined mt-3 md:mt-0'} to='/home'>HOME</NavLink>
                <NavLink onClick={() => setOpen(false)} className={({ isActive }) => isActive ? 'active mt-3 md:mt-0' : 'undefined mt-3 md:mt-0'} to='/foods'>FOODS</NavLink>
                <NavLink onClick={() => setOpen(false)} className={({ isActive }) => isActive ? 'active mt-3 md:mt-0' : 'undefined mt-3 md:mt-0'} to='/about-us'>ABOUT US</NavLink>
                <NavLink onClick={() => setOpen(false)} className={({ isActive }) => isActive ? 'active relative mt-3 md:mt-0 py-2 pr-2' : 'undefined mt-3 md:mt-0 relative py-2 pr-2'} to='/checkout'>
                    <img className='w-8' src="https://img.icons8.com/arcade/512/checkout.png" alt="" />
                    <h1 className='absolute top-0 right-0 badge badge-sm badge-secondary'>{user?.uid ? shops.length : 0}</h1>
                </NavLink>



                {
                    user?.uid ?
                        <Link className='order-first md:order-none' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                            <img onClick={() => setProfileView(!profileView)} className='w-10 rounded-full' src={user?.photoURL} alt="" />
                        </Link>
                        :
                        <NavLink onClick={() => setOpen(false)} className={({ isActive }) => isActive ? 'active mt-3 md:mt-0' : 'undefined mt-3 md:mt-0'} to='/login'>LOGIN</NavLink>
                }
            </div>
            {
                user?.uid && <div className={`absolute text-black z-50 top-18 right-4 w-56 ${isHovering || profileView ? 'hidden md:block' : 'hidden'}`}>
                    <div className='p-3 rounded-lg bg-green-200 text-center'>
                        <div>
                            <img className='w-10 rounded-full mx-auto' src={user?.photoURL} alt="" />
                        </div>
                        <h1 className='text-2xl font-bold pt-1'>{user?.displayName}</h1>
                        <h1 className='pb-2'>{user?.email}</h1>
                        <div className='mx-auto flex justify-evenly items-center'>
                            <button onClick={() => handleLogOut()} className='btn navbar-design btn-sm btn-warning'>Log Out</button>
                            <Link onClick={() => setOpen(!open)} to='/profile'>
                                <button onClick={() => setProfileView(!profileView)} className='btn btn-sm btn-primary'>Profile</button>
                            </Link>
                        </div>
                    </div>
                </div>
            }

        </nav>


    );
};

export default Navbar;