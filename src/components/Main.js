import react, { useState, useEffect } from 'react'
import requests from './Request'
import axios from 'axios'

const Main = () => {
    const [movies, setMovies] = useState([])

    const movie = movies[Math.floor(Math.random() * movies.length)]

    useEffect(() => {
        axios.get(requests.requestsUpcoming).then((response) => {
            setMovies(response.data.results)
            console.log(movie)
        })
    }, [])

    const truncateString = (str, num) => {
        if (str?.length > num) {
            return str.slice(0, num) + "..."
        }
    }


    return (
        <div className='w-full h-[550px] text-white'>
            <div className="w-full h-full">
                <div className='absolute w-full md:w-[750px] h-[550px] bg-gradient-to-r from-black'></div>
                <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
            </div>

            <div className='absolute w-full top-[45%] md:top-[20%] p-4 md:p-8'>
                <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl w-[70%] md:w-[50%] font-[300]'>{movie?.title}</h1>

                <div className='my-5'>
                    <button className='border border-gray-300 text-black bg-gray-300 px-2 md:px-4 py-2 cursor-pointer hover:bg-white/60'>Play</button>
                    <button className='cursor-pointer border border-gray-300 text-white px-2 md:px-4 py-2 ml-4 hover:bg-white/10'>Watch Later</button>
                </div>
                <small className='text-gray-300 text-sm'>Released : {movie?.release_date}</small>
                <p className='w-full md:w-[75%] lg:w-[50%] xl:w-[35%] hidden  md:block lg:block text-gray-200'>{truncateString(movie?.overview, 150)}</p>
            </div>
        </div>
    )
}

export default Main