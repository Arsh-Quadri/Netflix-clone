import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import companyLogo from './netflix-logo.png';
import { UserAuth } from '../context/AuthContext';

const Navbar = () => {
    const { user, logOut } = UserAuth()
    const navigate = useNavigate()
    const handleLogout = async () => {

        try {
            await logOut()
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    };

    return (

        <div className='flex items-center justify-between pr-5 z-[100] w-full absolute'>
            <Link to='/'>
                <h1><img className='w-[7rem] ml-5 mt-3 cursor-pointer' src={companyLogo} alt="" /></h1></Link>
            {user?.email ? <div className='mt-3'>
                <Link to='/account'>
                    <button className='text-white pr-3 hover:text-gray-100'>Account</button>
                </Link>

                <button onClick={handleLogout} className='bg-red-600 rounded cursor-pointer px-4 py-[0.3rem] text-white hover:bg-red-700'>Logout</button>

            </div> : <div className='mt-3'>
                <Link to='/login'>
                    <button className='text-white pr-3 hover:text-gray-100'>Sign in</button>
                </Link>
                <Link to='/signup'>
                    <button className='bg-red-600 rounded cursor-pointer px-4 py-[0.3rem] text-white hover:bg-red-700'>Sign up</button>
                </Link>
            </div>}

        </div>

    )
}

export default Navbar