import { async } from '@firebase/util'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'


const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { user, signUp } = UserAuth()
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await signUp(email, password)
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='w-full h-full'>
            <img className=' sm:block absolute w-full h-full object-cover top-0 -z-20' src="https://assets.nflxext.com/ffe/siteui/vlv3/5aecc44d-2a1f-4313-8399-98df20908b64/4d9d5abf-07d8-4dd6-9899-a96b902312ee/IN-en-20221114-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="/" />
            <div className='bg-black/70 fixed top-0 left-0 w-full h-screen -z-10'></div>
            <div className='fixed w-full px-4 py-16 z-50'>
                <div className='max-w-[300px] md:max-w-[450px] h-[480px] mx-auto bg-black/75 text-white'>
                    <div className='max-w-[250px] md:max-w-[320px] mx-auto py-16'>
                        <h1 className='text-3xl font-[500]'>Sign Up</h1>
                        <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                            <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email' autoComplete='email' className='p-3 my-2 bg-gray-700 rounded' />
                            <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password' autoComplete='password' className='p-3 my-2 bg-gray-700 rounded' />
                            <button className='bg-red-700 py-3 my-6 rounded font-[500] hover:bg-red-600'>Sign Up</button>
                            <div className='flex justify-between items-center text-sm text-gray-500'>
                                <p><input type="checkbox" /> Remember me</p><p className='cursor-pointer'>Need Help?</p>
                            </div>
                            <p className='py-8'>
                                <span className='text-gray-500'>Already subscribe to Netflix?</span> <Link to='/login'>Sign In</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup