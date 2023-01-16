import React from 'react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from "firebase/auth";
import Swal from 'sweetalert2'
import './Signup.css'

const Signup = () => {
    const { user, signupEmailAndPassword, updateUserProfile, signupWithGoogle } = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate()
    let authInfo = user


    const handleSubmit = (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        signupEmailAndPassword(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                handleUpdate(name)
                navigate('/login')
                event.target.reset()
                Swal.fire(
                    'Congratulation',
                    'Your Account Create Successfully',
                    'success'
                )
            })
            .catch(error => {
                console.error(error);
            })

    }

    const handleUpdate = (name) => {
        const profile = { displayName: name, photoURL: 'https://img.tpng.net/detail/500x0_202-2024792_profile-icon-png.png' }
        updateUserProfile(profile)
            .then(result => {
                console.log(result);
            })
            .catch(error => console.error(error))
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
                        if (authInfo.uid) {
                            navigate('/')
                        }
                        else {
                            navigate('login')
                        }
                        Swal.fire(
                            'Welcome',
                            'Your Account Create Successfully',
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
            <div className="bg-blue-50 min-h-screen flex flex-col">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <form onSubmit={handleSubmit} className="signup-background bg-cyan-200 px-6 py-4 rounded shadow-lg text-black w-full">
                        <h1 className="mb-8 text-3xl font-bold text-center">Sign up</h1>
                        <input
                            type="text"
                            className="block bg-white border border-grey-light w-full p-3 rounded mb-4"
                            name="name"
                            placeholder="Full Name" required />

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
                        >Create Account</button>
                        <div>
                            <h1 className='text-center py-3'>Or Sign Up with</h1>
                            <div className='flex justify-center'>
                                <img onClick={() => handleSignupWithGoogle()} className='w-8 mr-5 bg-gray-200 rounded-full p-1' src="https://cdn-icons-png.flaticon.com/512/281/281764.png" alt="" />
                                <img className='w-8 mr-5 bg-gray-200 rounded-full p-1' src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png" alt="" />
                                <img className='w-8 bg-gray-200 rounded-full p-1' src="https://cdn-icons-png.flaticon.com/512/2504/2504799.png" alt="" />
                            </div>
                        </div>
                        <p className='text-center '>Already You Have an Account? <Link to='/login' className=' font-bold hover:text-white'>Log in</Link></p>
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

export default Signup;