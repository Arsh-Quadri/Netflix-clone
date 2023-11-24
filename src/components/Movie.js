import React from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { useState } from 'react'
import { UserAuth } from '../context/AuthContext'
import { db } from './firebase'
import { arrayUnion, doc, updateDoc } from 'firebase/firestore'



const Movie = ({ item }) => {
    const [like, setLike] = useState(false)
    const [saved, setSaved] = useState(false)
    const { user } = UserAuth()
    const movieID = doc(db, 'users', `${user?.email}`);

    const saveShow = async () => {

        if (user?.email) {
            setLike(!like);
            setSaved(true);
            await updateDoc(movieID, {
                savedShows: arrayUnion({
                    id: item.id,
                    title: item.title || item.name,
                    img: item.backdrop_path,

                }),
            });
        } else {
            alert('Please log in to save a movie');
        }
    };

    const truncateString = (str, num) => {
        if (str?.length > num) {
            return str.slice(0, num) + "..."
        }
        else {
            return str
        }
    }

    return (
        <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 '>
            <img className='w-full h-auto block ' src={!item?.backdrop_path ? "https:imgs.search.brave.com/2Eg8DWaE3XdjUjRKhSVDySs51nbDh2We8RXztgb4oxo/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5I/SmdiQUVHT0FOM19N/NVZfQWtOSlp3SGFF/SyZwaWQ9QXBp" : `https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} />

            <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">

                <p className='white-space-normal text-xs md:text-sm lg:text-sm items-center h-full text-center font-[400] flex justify-center'>{truncateString(item?.title || item?.name, 30)}</p>
                <p onClick={saveShow}>
                    {like ? <FaHeart className='absolute top-4 left-4 text-gray-300' /> : <FaRegHeart className='absolute top-4 left-4 text-gray-300' />}
                </p>

            </div>
        </div>
    )
}

export default Movie




