import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import image from '../../../assets/logo/foodshop2.webp'
import './Profile.css'

const Profile = () => {
    const { user, logout } = useContext(AuthContext)
    const handleLogOut = () => {
        logout()
    }
    return (
        <div>
            <div className=" bg-gray-20 flex flex-wrap items-center justify-center">
                <div className="w-[95%] md:w-[600px] bg-white rounded dark:bg-gray-800 shadow-lg transform duration-200 easy-in-out mt-12">
                    <div className="h-2/4 sm:h-64 overflow-hidden">

                        <img className="w-full h-[250px] rounded-t"
                            src={image}
                            alt="profile cover photo" />
                    </div>
                    <div className="flex justify-start px-5 -mt-14 mb-5">
                        <span clspanss="block relative h-32 w-32">
                            <img alt="Photo by aldi sigun on Unsplash"
                                src={user?.photoURL}
                                className="mx-auto object-cover rounded-full h-24 w-24 bg-white p-1" />
                        </span>
                    </div>
                    <div class="relative">
                        <div className='absolute bg-blue-400 rounded-full p-2 -top-10 right-5 text-white'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                            </svg>

                        </div>
                        <div className="px-7 mb-8">
                            {
                                user?.displayName ? <h2 className="profile-design text-3xl font-bold text-green-800 dark:text-gray-300">{user?.displayName}</h2>
                                    :
                                    <h2 className="text-3xl font-bold text-green-800 dark:text-gray-300">No set name</h2>
                            }
                            <p className="text-gray-400 mt-2 dark:text-gray-400">Dhaka</p>
                            <p className="mt-2 text-gray-600 dark:text-gray-300">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                Asperiores molestiae vitae odio non commodi itaque quisquam incidunt doloribus fugit nesciunt.</p>
                            {
                                user?.uid && <div
                                    className="profile-background justify-center px-4 py-2 cursor-pointer bg-green-900 max-w-min mx-auto mt-8 rounded-lg text-gray-300 hover:bg-green-800 hover:text-gray-100 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-gray-200">
                                    {user?.email}
                                </div>
                            }
                            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-8">
                                <button
                                    className="profile-design text-green-900 hover:text-green-700 p-1 sm:p-2 inline-flex items-center dark:text-gray-400 dark:hover:text-gray-300">
                                    <svg className="w-7 h-7 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path
                                            d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                    </svg>
                                </button>


                                <button
                                    className="profile-design text-green-900 hover:text-green-700 p-1 sm:p-2  inline-flex items-center dark:text-gray-400 dark:hover:text-gray-30 dark:text-gray-400 dark:hover:text-gray-300">
                                    <svg className="w-7 h-7 fill-current" role="img" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <path
                                                d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055">
                                            </path>
                                        </g>
                                    </svg>
                                </button>
                                <button
                                    className="profile-design text-green-900 hover:text-green-700 p-1 sm:p-2  inline-flex items-center dark:text-gray-400 dark:hover:text-gray-30 dark:text-gray-400 dark:hover:text-gray-300">
                                    <svg className="w-7 h-7 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                        <path
                                            d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        {
                            user?.uid && <button className='profile-background bg-blue-600 hover:bg-rose-600 text-white font-bold py-2 px-8 border-0 rounded-lg mb-3' onClick={handleLogOut}>Logout</button>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;