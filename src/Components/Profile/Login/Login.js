import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import './Login.css'
import { GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Login = () => {
    const { user, loginWithEmailPassword, signupWithGoogle } = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        loginWithEmailPassword(email, password)
            .then(result => {
                const user = result.user
                const currentUser = {
                    email: user.email
                }

                fetch('https://food-shop-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })

                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('user-token', data.token)
                        navigate(from, { replace: true })
                        event.target.reset()
                        Swal.fire(
                            'Welcome',
                            'Your Account Loin Successfully',
                            'success'
                        )
                    })

            })
            .catch(error => {
                console.error(error);
            })

    }

    const handleSignupWithGoogle = () => {
        signupWithGoogle(googleProvider)
            .then(result => {
                const user = result.user
                const currentUser = {
                    email: user.email
                }

                fetch('https://food-shop-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('user-token', data.token)
                        navigate('/')
                        Swal.fire(
                            'Welcome',
                            'Your Account Login Successfully',
                            'success'
                        )
                    })


            })
            .catch(error => {
                console.error(error);
            })
    }
    return (
        <div>
            <div className="bg-blue-20 min-h-screen flex flex-col">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <form onSubmit={handleSubmit} className="login-background px-6 py-4 rounded shadow-lg text-black w-full">
                        <h1 className="mb-8 text-3xl font-bold text-center">Login</h1>
                        <input
                            type="email"
                            className="block bg-white border border-grey-light w-full p-3 rounded mb-4"
                            name="email"
                            placeholder="Email" required />

                        <input
                            type="password"
                            className="block bg-white border border-grey-light w-full p-3 rounded mb-4"
                            name="password"
                            placeholder="Password" required />

                        <button
                            type="submit"
                            className="button-color w-full text-center py-3 rounded text-white font-bold bg-green-600  focus:outline-none my-1"
                        >Login</button>
                        <div>
                            <h1 className='text-center py-3'>Or Sign Up with</h1>
                            <div className='flex justify-center'>
                                <img onClick={() => handleSignupWithGoogle()} className='w-8 mr-5 bg-gray-200 rounded-full p-1' src="https://cdn-icons-png.flaticon.com/512/281/281764.png" alt="" />
                                <img className='w-8 mr-5 bg-gray-200 rounded-full p-1' src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png" alt="" />
                                <img className='w-8 bg-gray-200 rounded-full p-1' src="https://cdn-icons-png.flaticon.com/512/2504/2504799.png" alt="" />
                            </div>
                        </div>
                        <p className='text-center '>You don't have an account? <Link to='/signup' className=' font-bold hover:text-white'>Signup</Link></p>
                    </form>

                    <div className="text-grey-dark mt-6">
                        Already have an account?
                        <Link to='/login' className="no-underline border-b border-blue text-blue">
                            Log in
                        </Link>.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;