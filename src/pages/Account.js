import React from 'react'
import SavedShows from '../components/SavedShows'

const Account = () => {
  return (
    <>
      <div className='w-full text-white'>
        <img className='w-full h-[400px] object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/5aecc44d-2a1f-4313-8399-98df20908b64/4d9d5abf-07d8-4dd6-9899-a96b902312ee/IN-en-20221114-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="/" />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-[400px]'></div>
        <div className='absolute top-[20%] p-4 md:p-10'>
          <h2 className='text-3xl md:text-5xl font-[500]'>My Shows</h2>
        </div>
      </div>
      <SavedShows />
    </>

  )
}

export default Account