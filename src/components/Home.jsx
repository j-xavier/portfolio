import React from 'react'
import HeroImg from '../assets/heroimg.jpg'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-600 text-white">
        
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-around h-full px-4 md:flex-row">
            <div className="flex flex-col justify-center h-full">
                <h2 className="text-3xl sm:text-5xl font-bold">I am a full stack developer</h2>
                <p className="text-gray-300 py-4 max-w-md">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit sed ullam alias sunt perspiciatis, mollitia totam non voluptatibus similique nihil harum magnam explicabo deserunt dolores eligendi nisi perferendis quo repudiandae.</p>
                <div>
                    <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-400 to-blue-400 cursor-pointer">
                        Portfolio
                        <span className="group-hover:rotate-90 duration-200"><HiOutlineArrowNarrowRight size={20} className="ml-3"/></span>
                    </button>
                </div>
            </div>
            <div className='flex justify-end '>
                <img src={HeroImg} alt="Xavier Profile" className="rounded-3xl mx-0 w-1/3 md:w-1/3" />
            </div>
        </div>
    </div>
  )
}

export default Home