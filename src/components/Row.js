import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import Movie from './Movie'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'


const Row = ({ title, fetchURL, rowID }) => {
  const [movies, setmovies] = useState([])

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setmovies(response.data.results)
    })
  }, [fetchURL])

  const slideLeft = () => {
    var slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  }
  const slideRight = () => {
    var slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  }

  return (
    <>
      <h2 className='text-white font-300 md:text-xl p-4 relative'>{title}</h2>
      <div className='relative flex h-full items-center group' id='row'>
        <MdChevronLeft onClick={slideLeft} size={40} className='bg-white rounded-full opacity-50 hover:opacity-100  hidden z-10 absolute left-0 group-hover:block cursor-pointer' />
        <div id={'slider' + rowID} className="w-full h-full whitespace-nowrap scroll-smooth relative overflow-x-scroll  scrollbar-hide">
          {movies && movies.map((item, id) => (
            <Movie key={id} item={item} />

          ))}
        </div>
        <MdChevronRight onClick={slideRight} size={40} className='bg-white rounded-full opacity-50 hover:opacity-100  hidden z-10 absolute right-0 group-hover:block cursor-pointer' />
      </div>
    </>
  )
}

export default Row