import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'

const NavBar = () => {
    const [nav, setNav] = useState(false)
    const links = [
    {
        id: 1,
        link: 'home'
    },
    {
        id: 2,
        link: 'projects'
    },
    {
        id: 3,
        link: 'contact'
    },];

return (
    <div className="flex justify-between items-center w-full h-20 px-4 py-2 text-white bg-black fixed">
        <div>
            <h1 className='text-6xl font-signature ml-2 pl-4'>Xavier</h1>
        </div>

        <ul className="hidden md:flex">
            {links.map((el) => (
                <li 
                key={el.id} 
                className="text-3xl px-4 cursor-pointer capitalize font-medium text-gray-300 hover:scale-110 duration-100">
                    {el.link}
                </li>
            ))}           

        </ul>

        {/* Menu Icon */}
        <div onClick={()=>setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-300
        md:hidden">
            {
                nav ? <FaTimes size={30} /> : <FaBars size={30} />
            }
        </div>

        {nav && (

        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-600 text-gray-300">
            {links.map((el) => (
                    <li 
                    key={el.id} 
                    className="px-4 curson-pointer capitalize py-6 text-4xl">
                        {el.link}
                    </li>
                ))}
            
        </ul>)}

    </div>
    );
};

export default NavBar