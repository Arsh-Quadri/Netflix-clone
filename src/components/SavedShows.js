import React, { useState, useEffect } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { UserAuth } from '../context/AuthContext'
import { db } from './firebase'
import { updateDoc, doc, onSnapshot } from 'firebase/firestore'
import { AiOutlineClose } from 'react-icons/ai'


const SavedShows = () => {
    const [movies, setMovies] = useState([])
    const { user } = UserAuth()
    const slideLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
    }
    const slideRight = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
    }
    useEffect(() => {
        onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
            setMovies(doc.data()?.savedShows)

        })
    }, [user?.email])
    const truncateString = (str, num) => {
        if (str?.length > num) {
            return str.slice(0, num) + "..."
        }
        else {
            return str
        }
    }
    const movieRef = doc(db, 'users', `${user?.email}`)
    const deleteShow = async (passedID) => {
        try {
            const result = movies.filter((item) => item.id !== passedID)
            await updateDoc(movieRef, {
                savedShows: result,
            })

        } catch (error) {
            console.log(error)

        }
    }


    return (
        <>
            <h2 className='text-white font-300 md:text-xl p-4'>My Shows</h2>
            <div className='relative flex h-full items-center group' id='row'>
                <MdChevronLeft onClick={slideLeft} size={40} className='bg-white rounded-full opacity-50 hover:opacity-100  hidden z-10 absolute left-0 group-hover:block cursor-pointer' />
                <div id={'slider'} className="w-full h-full whitespace-nowrap scroll-smooth relative overflow-x-scroll  scrollbar-hide">
                    {movies && movies.map((item, id) => (
                        <div key={id} className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 '>
                            <img className='w-full h-auto block ' src={`https://image.tmdb.org/t/p/w500/${item?.img}`} alt={item?.title} />

                            <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">

                                <p className='white-space-normal text-xs md:text-sm lg:text-sm items-center h-full text-center font-[400] flex justify-center'>{truncateString(item?.title || item?.name, 30)}</p>
                                <p onClick={() => deleteShow(item.id)} className='absolute text-gray-300 top-4 right-4'><AiOutlineClose /></p>
                            </div>
                        </div>
                    ))}
                </div>
                <MdChevronRight onClick={slideRight} size={40} className='bg-white rounded-full opacity-50 hover:opacity-100  hidden z-10 absolute right-0 group-hover:block cursor-pointer' />
            </div>
        </>
    )
}

export default SavedShows       